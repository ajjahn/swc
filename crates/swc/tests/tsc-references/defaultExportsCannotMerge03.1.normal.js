//// [defaultExportsCannotMerge03.ts]
"use strict";
//// [m1.ts]
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Decl;
    }
});
var _class_call_check = require("@swc/helpers/lib/_class_call_check.js").default;
var Decl = function Decl() {
    "use strict";
    _class_call_check(this, Decl);
};
//// [m2.ts]
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _interop_require_default = require("@swc/helpers/lib/_interop_require_default.js").default;
var _m1 = /*#__PURE__*/ _interop_require_default(require("m1"));
(0, _m1.default)();
var x;
var y;
var z = new _m1.default();
var sum = z.p1 + z.p2;
