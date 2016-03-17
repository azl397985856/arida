let listen, log, obj, one, remove, trigger, __this;
obj = {};
__this = this;
module.exports = {
	listen(key, eventfn) {
		let stack;
		let _ref;
		stack = (_ref = obj[key]) != null ? _ref : obj[key] = [];
		return stack.push(eventfn);
	},
	one(key, eventfn) {
		remove(key);
		return listen(key, eventfn);
	},
	remove(key) {
		let _ref;
		return (_ref = obj[key]) != null ? _ref.length = 0 : void 0;
	},
	trigger() {
		let fn, stack, _i, _len, _ref, key;
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
			trigger: trigger
		};
	},
};
