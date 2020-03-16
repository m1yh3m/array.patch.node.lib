function insertBeforePosition(arr, n, val) {
  return insertAtPosition(arr, n - 1, val)
}
function insertAtPosition(arr, n, val) {
  return n < 0 || n > arr.length ? arr : [...arr.slice(0, n), val, ...arr.slice(n + 1)]
}
function insertAfterPosition(arr, n, val) {
  return insertAtPosition(arr, n + 1, val)
}

module.exports = {
  insertAfterPosition,
  insertAtPosition,
  insertBeforePosition,
}
