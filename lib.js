function insertBeforePosition(arr, n, val) {
    arr = arr || this
    if (arr === undefined || arr === null) {
        return []
    }
    return insertAtPosition(arr, n - 1, val)
}

function insertAtPosition(arr, n, val) {
    arr = arr || this
    if (arr === undefined || arr === null) {
        return []
    }
    return n < 0 || n > arr.length ? arr : [...arr.slice(0, n), val, ...arr.slice(n + 1)]
}

function insertAfterPosition(arr, n, val) {
    arr = arr || this
    if (arr === undefined || arr === null) {
        return []
    }
    return insertAtPosition(arr, n + 1, val)
}

function insertBeforeItem(arr, item, val) {
    arr = arr || this
    if (arr === undefined || arr === null) {
        return []
    }
    const n = arr.indexOf(item)
    return n < 0 ? arr : insertAtPosition(arr, n - 1, val)
}

function insertAtItem(arr, item, val) {
    arr = arr || this
    if (arr === undefined || arr === null) {
        return []
    }
    const n = arr.indexOf(item)
    return n < 0 ? arr : insertAtPosition(arr, n, val)
}

function insertAfterItem(arr, item, val) {
    arr = arr || this
    if (arr === undefined || arr === null) {
        return []
    }
    const n = arr.indexOf(item)
    return n < 0 ? arr : insertAtPosition(arr, n + 1, val)
}

function toBitArray(arr) {
    arr = arr || this
    if (arr === undefined || arr === null) {
        return []
    }
    return arr.map(number => number.toString(2).split('').map(i => Number(i)))
}

function trues(arr, condition) {
    arr = arr || this
    if (arr === undefined || arr === null) {
        return []
    }
    var truths = arr.map(item => condition(item) === true)
    return truths.reduce((acc, val, i, ar) => val ? [...acc, i] : acc, [])
}

function falses(arr, condition) {
    arr = arr || this
    if (arr === undefined || arr === null) {
        return []
    }
    var falseths = arr.map(item => condition(item) === false)
    return falseths.reduce((acc, val, i, ar) => val ? [...acc, i] : acc, [])
}

module.exports = {
    insertAfterPosition,
    insertAtPosition,
    insertBeforePosition,
    insertAfterItem,
    insertBeforeItem,
    insertAtItem,
    toBitArray,
    trues,
    falses
}
