const enhancer = require('./enhancer.js');
// test away!
describe('', () => {
    test('', () => {

    })
})

describe('enhancing items', () => {
    describe('repair', () => {
        test('returns durability 100', () => {
            const item = {
                durability: 15
            }
            expect(enhancer.repair(item)).toEqual({durability: 100})
        })
    })
})