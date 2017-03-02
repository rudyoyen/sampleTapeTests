// To run these tests, execute in the console: node sampleTests.js
// To see more readable results use: node sampleTests.js | faucet or node sampleTests.js | tap-dot

var test = require('tape');

test('first sample', function(t) {
	t.equal("aba", "aba");
	t.end();
});