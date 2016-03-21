import core from './core';
let src = {};
module.exports = {
	init(source) {
		src = source;
		return src;
	},
	subcribe(keys, callback) {
		if(Object.prototype.toString.apply(keys) === '[object Array]') {
			keys.map((item) => {
				core.listen(item, callback);
			});
		} else if(typeof keys === "string"){
			core.listen(keys, callback);
		} else if(typeof keys === 'object'){
			for (let key in keys) {
				if (Object.prototype.hasOwnProperty.call(keys, key)) {
					core.listen(key, callback);
				}
			}
		} else {
			console.error('subcribe\'s first argument must by a key, list of keys or <obje></obje>ct, please check your argument and try again!');
		}
	},
	update(data) {
		setSource(data);
	},
	get() {
		return getSource();
	}
}
function dispatch(data) {
	for (let key in data) {
		if (Object.prototype.hasOwnProperty.call(data, key)) {
			if (src[key] == data[key]){
				return;
			} else {
				core.trigger(key, data);
			}
		}
	}
};
function getSource() {
	return src;
};
function setSource(data) {
	dispatch(data);
	for (let key in data) {
		if (Object.prototype.hasOwnProperty.call(data, key)) {
			src[key] = data[key];
		}
	}
}
