import arida from '../src/index';
const sourceName = 'test';
const source = {a: '1', b: '2'};
let data = {a: 1};
let i = 1;
(function test() {
	/*arida.api.subcribe('aaa', () => {
		1 + 1;
	});*/
	arida.api.init(source);
	arida.api.subcribe(sourceName, () => {
		// console.log('subcribe success, listen on ' + sourceName);
	});
	while(i < 5) {
		data.a = i++;
		arida.api.dispatch(sourceName, data);
	}
})()