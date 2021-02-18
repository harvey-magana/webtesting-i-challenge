module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {

  if(item.enhancement === 20) {
    return item.enhancement
  } else if (item.enhancement < 20) {
    return item.enhancement++
  }
  
  return { ...item };
}

function fail(item) {
  if(item.enhancement < 15) {
    item.durability -= 5;
  } else if (item.enhancement >= 15) {
    item.durability -= 10;
  } else if (item.enhancement > 16) {
    item.enhancement -= 1;
  }

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
