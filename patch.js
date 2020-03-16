const {
  insertAfterPosition,
  insertAtPosition,
  insertBeforePosition,
  toBitArray,
} = require('./lib')

function patch() {
  Array.prototype.insertAfterPosition = insertAfterPosition
  Array.prototype.insertAtPosition = insertAtPosition
  Array.prototype.insertBeforePosition = insertBeforePosition
  Array.prototype.toBitArray = toBitArray
}

function depatch() {
  Array.prototype.insertAfterPosition = null
  Array.prototype.insertAtPosition = null
  Array.prototype.insertBeforePosition = null
  Array.prototype.toBitArray = null
  delete Array.prototype.insertAfterPosition
  delete Array.prototype.insertAtPosition
  delete Array.prototype.insertBeforePosition
  delete Array.prototype.toBitArray
}

module.exports = {
  patch, depatch
}
