const {
    insertAfterPosition,
    insertAtPosition,
    insertBeforePosition,
    insertAfterItem,
    insertAtItem,
    insertBeforeItem,
    toBitArray,
    trues,
    falses
} = require('../lib')

describe('insertBeforePosition', () => {
    it('inserts a value at proper position', () => {
        const x = Array(10).fill(0).map((v, i) => i + 1)
        const expected = [1, 2, 3, 4, 100, 6, 7, 8, 9, 10]
        const actual = insertBeforePosition(x, 5, 100)
        expect(actual).toEqual(expected)
    })

    it('does not insert if n is negative', () => {
        const x = Array(10).fill(0).map((v, i) => i + 1)
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const actual = insertBeforePosition(x, -4, 100)
        expect(actual).toEqual(expected)
    })

    it('does not insert if n greater than length of the array', () => {
        const x = Array(10).fill(0).map((v, i) => i + 1)
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const actual = insertBeforePosition(x, 14, 100)
        expect(actual).toEqual(expected)
    })
})

describe('insertAtPosition', () => {
    it('inserts a value at proper position', () => {
        const x = Array(10).fill(0).map((v, i) => i + 1)
        const expected = [1, 2, 3, 4, 100, 6, 7, 8, 9, 10]
        const actual = insertAtPosition(x, 4, 100)
        expect(actual).toEqual(expected)
    })

    it('does not insert if n is negative', () => {
        const x = Array(10).fill(0).map((v, i) => i + 1)
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const actual = insertAtPosition(x, -4, 100)
        expect(actual).toEqual(expected)
    })

    it('does not insert if n greater than length of the array', () => {
        const x = Array(10).fill(0).map((v, i) => i + 1)
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const actual = insertAtPosition(x, 14, 100)
        expect(actual).toEqual(expected)
    })
})

describe('insertAfterPosition', () => {
    it('inserts a value at proper position', () => {
        const x = Array(10).fill(0).map((v, i) => i + 1)
        const expected = [1, 2, 3, 4, 100, 6, 7, 8, 9, 10]
        const actual = insertAfterPosition(x, 3, 100)
        expect(actual).toEqual(expected)
    })

    it('does not insert if n is negative', () => {
        const x = Array(10).fill(0).map((v, i) => i + 1)
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const actual = insertAfterPosition(x, -4, 100)
        expect(actual).toEqual(expected)
    })

    it('does not insert if n greater than length of the array', () => {
        const x = Array(10).fill(0).map((v, i) => i + 1)
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const actual = insertAfterPosition(x, 14, 100)
        expect(actual).toEqual(expected)
    })
})

describe('insertBeforeItem', () => {
    it('inserts a value at proper Item', () => {
        const x = Array(10).fill(0).map((v, i) => i + 1)
        const expected = [1, 2, 3, 100, 5, 6, 7, 8, 9, 10]
        const actual = insertBeforeItem(x, 5, 100)
        expect(actual).toEqual(expected)
    })

    it('does not insert if n is negative', () => {
        const x = Array(10).fill(0).map((v, i) => i + 1)
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const actual = insertBeforeItem(x, -4, 100)
        expect(actual).toEqual(expected)
    })

    it('does not insert if n greater than length of the array', () => {
        const x = Array(10).fill(0).map((v, i) => i + 1)
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const actual = insertBeforeItem(x, 14, 100)
        expect(actual).toEqual(expected)
    })
})

describe('insertAtItem', () => {
    it('inserts a value at proper Item', () => {
        const x = Array(10).fill(0).map((v, i) => i + 1)
        const expected = [1, 2, 3, 100, 5, 6, 7, 8, 9, 10]
        const actual = insertAtItem(x, 4, 100)
        expect(actual).toEqual(expected)
    })

    it('does not insert if n is negative', () => {
        const x = Array(10).fill(0).map((v, i) => i + 1)
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const actual = insertAtItem(x, -4, 100)
        expect(actual).toEqual(expected)
    })

    it('does not insert if n greater than length of the array', () => {
        const x = Array(10).fill(0).map((v, i) => i + 1)
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const actual = insertAtItem(x, 14, 100)
        expect(actual).toEqual(expected)
    })
})

describe('insertAfterItem', () => {
    it('inserts a value at proper Item', () => {
        const x = Array(10).fill(0).map((v, i) => i + 1)
        const expected = [1, 2, 3, 100, 5, 6, 7, 8, 9, 10]
        const actual = insertAfterItem(x, 3, 100)
        expect(actual).toEqual(expected)
    })

    it('does not insert if n is negative', () => {
        const x = Array(10).fill(0).map((v, i) => i + 1)
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const actual = insertAfterItem(x, -4, 100)
        expect(actual).toEqual(expected)
    })

    it('does not insert if n greater than length of the array', () => {
        const x = Array(10).fill(0).map((v, i) => i + 1)
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const actual = insertAfterItem(x, 14, 100)
        expect(actual).toEqual(expected)
    })
})

describe('toBitArray', () => {
    it('converts a decimal number to bit array', () => {
        const numbers = [1, 2, 3]
        const expected = [[1], [1, 0], [1, 1]]
        const actual = toBitArray(numbers)
        expect(actual).toEqual(expected)
    })
})

describe('trues', () => {
    it('returns array of indices which are true for a given condition', () => {
        const numbers = [1, 2, 3, 4, 5, 6]
        const expected = [0, 1, 2]
        const condition = n => n < 4
        const actual = trues(numbers, condition)
        expect(actual).toEqual(expected)
    })
})

describe('falses', () => {
    it('returns array of indices which are true for a given condition', () => {
        const numbers = [1, 2, 3, 4, 5, 6]
        const expected = [3, 4, 5]
        const condition = n => n < 4
        const actual = falses(numbers, condition)
        expect(actual).toEqual(expected)
    })
})
