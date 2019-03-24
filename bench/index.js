const { Suite } = require('benchmark');
const salteen = require('../dist/salteen');

const KEY = 'ABvbsjaBSHC1265CHS';
const VALUE = 'hello world how are you?';
const STRING = '45484141420d5a425f41490d45425a0d4c5f480d54425812';

function bench(name) {
  console.log(`\n# ${name}`);
  const suite = new Suite();
  suite.on('cycle', e => console.log('  ' + e.target));
  return suite;
}

bench('encrypt')
	.add('salteen     ', () => salteen.encrypt(KEY)(VALUE))
	.run();

bench('decrypt')
	.add('salteen     ', () => salteen.decrypt(KEY)(STRING))
	.run();
