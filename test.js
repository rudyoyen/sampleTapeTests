//	COPIED from Eric Elliott's blog post: 
//	https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4#.me1nfq160

/*
To run these tests type into your console: babel-node test.js
To see more readable results use: babel-node test.js | faucet or babel-node test.js | tap-dot 

To run it in a browser, run the command:
browserify -t babelify test.js | browser-run -p 2222 | faucet
And then go to: http://localhost:2222
*/

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