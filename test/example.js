const test = require('ava');
const f = require('../index');

test('test1', t => {
	t.is(f(true), true);
	t.is(f(false), false);
});
