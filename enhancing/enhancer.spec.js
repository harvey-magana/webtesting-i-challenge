const enhancer = require('./enhancer.js');
// test away!

describe('', () => {
    test('', () => {

    })
})

describe('enhancing items', () => {
    describe('fail fn', () => {
        test('returns durability 85', () => {
            const item = {
                name: 'Bag of holding',
                durability: 90,
                enhancement: 14
            }
            expect(enhancer.fail(item)).toEqual({
                name: 'Bag of holding',
                durability: 85,
                enhancement: 14
            })
        })
    })
})


describe('testing enhancement success', () => {
    describe('success fn', () => {
        test('returns enhancement 3', () => {
            const item = {
                name: 'Bag of holding',
                durability: 96,
                enhancement: 2
            }
            expect(enhancer.success(item)).toEqual({
                name: 'Bag of holding',
                durability: 96,
                enhancement: 3,
            })
        })
    })
})

describe('enhancing items', () => {
    describe('repair fn', () => {
        test('returns durability 100', () => {
            const item = {
                durability: 15
            }
            expect(enhancer.repair(item)).toEqual({durability: 100})
        })
    })
})