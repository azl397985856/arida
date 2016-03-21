'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _core = require('./core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var src = {};
module.exports = {
	init: function init(source) {
		src = source;
		return src;
	},
	subcribe: function subcribe(keys, callback) {
		if (Object.prototype.toString.apply(keys) === '[object Array]') {
			keys.map(function (item) {
				_core2.default.listen(item, callback);
			});
		} else if (typeof keys === "string") {
			_core2.default.listen(keys, callback);
		} else if ((typeof keys === 'undefined' ? 'undefined' : _typeof(keys)) === 'object') {
			for (var key in keys) {
				if (Object.prototype.hasOwnProperty.call(keys, key)) {
					_core2.default.listen(key, callback);
				}
			}
		} else {
			console.error('subcribe\'s first argument must by a key, list of keys or <obje></obje>ct, please check your argument and try again!');
		}
	},
	update: function update(data) {
		setSource(data);
	},
	get: function get() {
		return getSource();
	}
};
function dispatch(data) {
	for (var key in data) {
		if (Object.prototype.hasOwnProperty.call(data, key)) {
			if (src[key] == data[key]) {
				return;
			} else {
				_core2.default.trigger(key, data);
			}
		}
	}
};
function getSource() {
	return src;
};
function setSource(data) {
	dispatch(data);
	for (var key in data) {
		if (Object.prototype.hasOwnProperty.call(data, key)) {
			src[key] = data[key];
		}
	}
}