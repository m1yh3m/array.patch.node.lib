# @m1yh3m/array.patch.node.lib

## installation

`npm i @m1yh3m/array.patch.node.lib`

## usage

```javascript
var lib = require("@m1yh3m/array.patch.node.lib");

var x = [1, 2, 3];

lib.patch();

x.toBitArray()[([1], [1, 0], [1, 1])];

lib.depatch();

x.toBitArray();
//TypeError: x.toBitArray is not a function
```
