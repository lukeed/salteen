const test = require('tape');
const lib = require('../dist/salteen');

test('exports', t => {
	t.is(typeof lib, 'object', 'exports a object');
	t.is(typeof lib.encode, 'function', '~> has "encode" function');
	t.is(typeof lib.decode, 'function', '~> has "decode" function');
	t.end();
});

