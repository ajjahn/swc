import _assert_this_initialized from "./_assert_this_initialized.mjs";
import _type_of from "./_type_of.mjs";
export default function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
