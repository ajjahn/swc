//// [objectTypeHidingMembersOfExtendedObject.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var c, i, b, B = function(A) {
    "use strict";
    _inherits(B, A);
    var _super = _create_super(B);
    function B() {
        return _class_call_check(this, B), _super.apply(this, arguments);
    }
    return B;
}(function A() {
    "use strict";
    _class_call_check(this, A);
});
c.valueOf(), c.data.hm, c.hm, i.valueOf(), i.data.hm, i.hm;
var a = {
    valueOf: function() {},
    data: new B()
};
a.valueOf(), a.data.hm, i.hm, b.valueOf();
