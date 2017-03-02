//COPIED from Eric Elliott's blog post: https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4#.me1nfq160

import test from 'tape';

test('A passing test', (assert) => {

  assert.pass('This test will pass.');

  assert.end();
});

test('Assertions with tape.', (assert) => {
  const expected = 'something to test';
  const actual = 'something to test';

  assert.equal(actual, expected,
    'Given two mismatched values, .equal() should produce a nice bug report');

  assert.end();
});