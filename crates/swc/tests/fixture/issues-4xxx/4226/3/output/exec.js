"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _async_to_generator = require("@swc/helpers/lib/_async_to_generator.js").default;
var _ts_generator = require("@swc/helpers/lib/_ts_generator.js").default;
require("reflect-metadata");
var v0 = function() {
    var _ref = _async_to_generator(function(v1) {
        return _ts_generator(this, function(_state) {
            return [
                2,
                v1
            ];
        });
    });
    return function(v1) {
        return _ref.apply(this, arguments);
    };
}().constructor;
var res = v0(function() {
    return Reflect.get(v3, "a");
});
console.log(res);
