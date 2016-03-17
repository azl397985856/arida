import core from './core';
module.exports = {
	subcribe(sourceName, callback) {
		core.listen(sourceName, callback);
	},
	dispatch(sourceName, data) {
		if (this.source[sourceName] === data) {
			return;
		} else {
			for (let key in data) {
				if (Object.prototype.hasOwnProperty.call(data, key)) {
					if (this.source[key] == data[key]){
						return;
					} else {
						console.log(this.source[key], data[key]);
						core.trigger(sourceName, data);
					}
				}
			}
		}
	},
	init(source) {
		this.source = source;
	}
}