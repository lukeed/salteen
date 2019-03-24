const test = require('tape');
const lib = require('../dist/salteen');

test('exports', t => {
	t.is(typeof lib, 'object', 'exports a object');
	t.is(typeof lib.encode, 'function', '~> has "encode" function');
	t.is(typeof lib.decode, 'function', '~> has "decode" function');
	t.end();
});

test('encode()', t => {
	let key = 'foobar';

	let foo = lib.encode(key);
	t.is(typeof foo, 'function', 'returns a new function');

	let val1 = foo('hello');
	t.is(typeof val1, 'string', '~> factory produces a string');

	let val2 = foo('world');
	t.is(typeof val2, 'string', '~> factory produces a string');

	t.isNot(val1, val2, 'hashed-values are not the same');
	t.is(val1, '7f727b7b78', '~> 1st value is correct');
	t.is(val2, '6078657b73', '~> 2nd value is correct');

	let val3 = lib.encode('hello')('hello');
	t.isNot(val1, val3, 'result is different w/ new key');
	t.is(val3, '0a070e0e0d', '~> 3rd value is correct');

	t.end();
});

test('decode()', t => {
	let key = 'foobar';

	let foo = lib.decode(key);
	t.is(typeof foo, 'function', 'returns a new function');

	let val1 = foo('7f727b7b78');
	t.is(typeof val1, 'string', '~> factory produces a string');

	let val2 = foo('6078657b73');
	t.is(typeof val2, 'string', '~> factory produces a string');

	t.isNot(val1, val2, 'real-values are not the same');
	t.is(val1, 'hello', '~> 1st value is correct');
	t.is(val2, 'world', '~> 2nd value is correct');

	let val3 = lib.decode('hello')('0a070e0e0d');
	t.is(val3, 'hello', '~> 3rd value is correct');

	t.end();
});
