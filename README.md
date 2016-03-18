## Introduction
A libabry for subcribing data what you'r interesting. 
when the part of data what you have subcibed has changed, the callback you  have registered will be triggered.
This is a data flow libary extends flux or reflux, you can pass data from compontents to its children or sibings. 
## Install

```bash
npm install arida
```

## Usage example

``` javascript
import arida from 'arida';
const source = {name: 'aa', id: 2, dept: 'math'};
arida.init(source);
arida.subcribe('name', (payload) => {
  console.log(payload);
});
arida.update({
  name: 'lucy',
});
arida.update({
  dept: 'chinese',
});
```
Run the example above, you will get {name: 'lucy'} on your console.


## Contributing

We welcome all contributions, please submit any ideas as [pull requests](https://github.com/azl397985856/arida/pulls) or as a [GitHub issue](https://github.com/azl397985856/arida/issues).
