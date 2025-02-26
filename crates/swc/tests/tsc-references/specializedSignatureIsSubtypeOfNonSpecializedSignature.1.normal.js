//// [specializedSignatureIsSubtypeOfNonSpecializedSignature.ts]
// Specialized signatures must be a subtype of a non-specialized signature
// All the below should not be errors
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
function foo(x) {}
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        _class_call_check(this, C);
    }
    var _proto = C.prototype;
    _proto.foo = function foo(x) {};
    return C;
}();
var C2 = /*#__PURE__*/ function() {
    "use strict";
    function C2() {
        _class_call_check(this, C2);
    }
    var _proto = C2.prototype;
    _proto.foo = function foo(x) {};
    return C2;
}();
var C3 = /*#__PURE__*/ function() {
    "use strict";
    function C3() {
        _class_call_check(this, C3);
    }
    var _proto = C3.prototype;
    _proto.foo = function foo(x) {};
    return C3;
}();
var a;
var a2;
var a3;
