//// [commonJSImportNestedClassTypeReference.ts]
//// [main.js]
require("./mod1").K;
//// [mod1.js]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var NS = {};
NS.K = function() {
    "use strict";
    function _class() {
        _class_call_check(this, _class);
    }
    return _class.prototype.values = function() {
        return new NS.K();
    }, _class;
}(), exports.K = NS.K;
