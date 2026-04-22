const assert = require('assert');

describe('CI Simple Test', function () {

  it('math test should pass', function () {
    assert.strictEqual(2 + 2, 4);
  });

  it('boolean test should pass', function () {
    assert.strictEqual(true, true);
  });

  it('string test should pass', function () {
    assert.strictEqual('ci', 'ci');
  });

});
