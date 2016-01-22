const test = require('ava');

test('test1', t => {
	t.pass('passed!');
});

test('test2', t => {
	t.fail();
});
