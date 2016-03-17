"use strict";

var listen = void 0,
    log = void 0,
    obj = void 0,
    one = void 0,
    remove = void 0,
    _trigger = void 0,
    __this = void 0;
obj = {};
__this = undefined;
module.exports = {
	listen: function listen(key, eventfn) {
		var stack = void 0;
		var _ref = void 0;
		stack = (_ref = obj[key]) != null ? _ref : obj[key] = [];
		return stack.push(eventfn);
	},
	one: function one(key, eventfn) {
		remove(key);
		return listen(key, eventfn);
	},
	remove: function remove(key) {
		var _ref = void 0;
		return (_ref = obj[key]) != null ? _ref.length = 0 : void 0;
	},
	trigger: function trigger() {
		var fn = void 0,
		    stack = void 0,
		    _i = void 0,
		    _len = void 0,
		    _ref = void 0,
		    key = void 0;
		key = Array.prototype.shift.call(arguments);
		stack = (_ref = obj[key]) != null ? _ref : obj[key] = [];
		for (_i = 0, _len = stack.length; _i < _len; _i++) {
			fn = stack[_i];
			if (fn.apply(__this, arguments) === false) {
				return false;
			}
		}
		return {
			listen: listen,
			one: one,
			remove: remove,
			trigger: _trigger
		};
	}
};