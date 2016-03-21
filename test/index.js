import arida from '../src/index';
const sourceName = 'test';
const source = {id: 1, name: '2', loc: 'henan'};
let data = {id: 1, loc: 'henan'};
let i = 0;
let locs = ['河南', 'beijing', 'hangzhou'];
(function test() {
	/*arida.api.subcribe('aaa', () => {
		1 + 1;
	});*/
	const init = arida.init(source);
	arida.subcribe({loc: 'nanjing'}, () => {
		console.log('subcribe success, listen on ' + sourceName);
	});
	while(i <2) {
		data.id = i++;
		// data.loc = locs[i];
		arida.update(data);
		console.log(init);
	}
})()