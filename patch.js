const {
  insertAfterPosition,
  insertAtPosition,
  insertBeforePosition,
} = require('./lib')

function patch() {
  Array.prototype.insertAfterPosition = insertAfterPosition
  Array.prototype.insertAtPosition = insertAtPosition
  Array.prototype.insertBeforePosition = insertBeforePosition
}

function depatch() {
  Array.prototype.insertAfterPosition = null
  Array.prototype.insertAtPosition = null
  Array.prototype.insertBeforePosition = null
  delete Array.prototype.insertAfterPosition
  delete Array.prototype.insertAtPosition
  delete Array.prototype.insertBeforePosition
}

module.exports = {
  patch, depatch
}
