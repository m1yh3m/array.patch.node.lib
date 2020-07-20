const {
    insertAfterPosition,
    insertAtPosition,
    insertBeforePosition,
    insertAfterItem,
    insertBeforeItem,
    insertAtItem,
    toBitArray,
    trues,
    falses
} = require('./lib')

function patch() {
    Array.prototype.insertAfterPosition = insertAfterPosition
    Array.prototype.insertAtPosition = insertAtPosition
    Array.prototype.insertBeforePosition = insertBeforePosition
    Array.prototype.insertAfterItem = insertAfterItem
    Array.prototype.insertBeforeItem = insertBeforeItem
    Array.prototype.insertAtItem = insertAtItem
    Array.prototype.toBitArray = toBitArray
    Array.prototype.trues = trues
    Array.prototype.falses = falses
}

function depatch() {
    Array.prototype.insertAfterPosition = null
    Array.prototype.insertAtPosition = null
    Array.prototype.insertBeforePosition = null
    Array.prototype.insertAfterItem = null
    Array.prototype.insertBeforeItem = null
    Array.prototype.insertAtItem = null
    Array.prototype.toBitArray = null
    Array.prototype.trues = null
    Array.prototype.falses = null
    delete Array.prototype.insertAfterPosition
    delete Array.prototype.insertAtPosition
    delete Array.prototype.insertBeforePosition
    delete Array.prototype.insertAfterItem
    delete Array.prototype.insertBeforeItem
    delete Array.prototype.insertAtItem
    delete Array.prototype.toBitArray
    delete Array.prototype.trues
    delete Array.prototype.falses
}

module.exports = {
    patch, depatch
}
