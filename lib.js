function insertBeforePosition(arr) {
  arr = arr || this
  if (arr === undefined || arr === null) {
    return []
  }
  return function (n, val) {
    return insertAtPosition(arr)(n - 1, val)
  }
}

function insertAtPosition(arr) {
  arr = arr || this
  if (arr === undefined || arr === null) {
    return []
  }
  return function (n, val) {
    return n < 0 || n > arr.length ? arr : [...arr.slice(0, n), val, ...arr.slice(n + 1)]
  }
}

function insertAfterPosition(arr) {
  arr = arr || this
  if (arr === undefined || arr === null) {
    return []
  }
  return function (n, val) {
    return insertAtPosition(arr)(n + 1, val)
  }
}

function insertBeforeItem(arr) {
  arr = arr || this
  if (arr === undefined || arr === null) {
    return []
  }
  return function (item, val) {
    const n = arr.indexOf(item)
    return n < 0 ? arr : insertAtPosition(arr)(n - 1, val)
  }
}

function insertAtItem(arr) {
  arr = arr || this
  if (arr === undefined || arr === null) {
    return []
  }
  return function (item, val) {
    const n = arr.indexOf(item)
    return n < 0 ? arr : insertAtPosition(arr)(n, val)
  }
}

function insertAfterItem(arr) {
  arr = arr || this
  if (arr === undefined || arr === null) {
    return []
  }
  return function (item, val) {
    const n = arr.indexOf(item)
    return n < 0 ? arr : insertAtPosition(arr)(n + 1, val)
  }
}

function toBitArray(arr) {
  arr = arr || this
  if (arr === undefined || arr === null) {
    return []
  }
  return arr.map(number => number.toString(2).split('').map(i => Number(i)))
}

module.exports = {
  insertAfterPosition,
  insertAtPosition,
  insertBeforePosition,
  insertAfterItem,
  insertBeforeItem,
  insertAtItem,
  toBitArray,
}
