//// [foo.ts]
!function(global, factory) {
    "object" == typeof module && "object" == typeof module.exports ? factory(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], factory) : (global = "undefined" != typeof globalThis ? globalThis : global || self) && factory(global.fooTs = {});
}(this, function(exports1) {
    "use strict";
    Object.defineProperty(exports1, "__esModule", {
        value: !0
    }), Object.defineProperty(exports1, "default", {
        enumerable: !0,
        get: ()=>_default
    });
    let _default = "./foo";
});
//// [index.ts]
!function(global, factory) {
    "object" == typeof module && "object" == typeof module.exports ? factory(exports, require("@swc/helpers/src/_async_to_generator.mjs"), require("@swc/helpers/src/_interop_require_wildcard.mjs")) : "function" == typeof define && define.amd ? define([
        "exports",
        "@swc/helpers/src/_async_to_generator.mjs",
        "@swc/helpers/src/_interop_require_wildcard.mjs"
    ], factory) : (global = "undefined" != typeof globalThis ? globalThis : global || self) && factory(global.indexTs = {}, global.asyncToGeneratorMjs, global.interopRequireWildcardMjs);
}(this, function(exports1, _async_to_generator, _interop_require_wildcard) {
    "use strict";
    Object.defineProperty(exports1, "__esModule", {
        value: !0
    }), _async_to_generator = _async_to_generator.default, _interop_require_wildcard = _interop_require_wildcard.default;
});
