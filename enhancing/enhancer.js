module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  item = {
    name: this.name,
    enhancement: this.enhancement, 
    durability: this.durability
  }

  if(item.durability < 100) {
    item.durability += 100;
  } else if (item.durability === 100) {
    return item.durability
  }

  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
