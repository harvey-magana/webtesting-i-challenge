const enhancer = require('./enhancer.js');
// test away!

describe('', () => {
    test('', () => {

    })
})

describe('testing enhancement success', () => {
    describe('success fn', () => {
        test('returns enhancement 20', () => {
            const item = {
                name: 'Singing Sword',
                durability: 96,
                enhancement: 19
            }
            expect(enhancer.success(item)).toEqual({
                name: 'Singing Sword',
                durability: 96,
                enhancement: 20
            })
        })
    })
})

describe('enhancing items', () => {
    describe('fail fn', () => {
        test('returns durability 85', () => {
            const item = {
                name: 'Singing Sword',
                durability: 90,
                enhancement: 14
            }
            expect(enhancer.fail(item)).toEqual({
                name: 'Singing Sword',
                durability: 85,
                enhancement: 14
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