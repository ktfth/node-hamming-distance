'use strict';
const assert = require('assert');
const hammingDistance = require('./');

describe('Hamming Distance', () => {
  it('should have the specified distance', () => {
    assert.equal(hammingDistance('this is a test', 'wokka wokka!!!'), 37);
  });
});
