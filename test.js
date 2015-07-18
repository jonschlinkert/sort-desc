'use strict';

/* deps: mocha */
var assert = require('assert');
var sortDesc = require('./');

describe('sort descending', function () {
  it('should sort elements in descending order.', function () {
    assert.deepEqual(['d', 'c', 'b', 'a'].sort(sortDesc), ['d', 'c', 'b', 'a']);
    assert.deepEqual(['g', 'z', 'a', 'x'].sort(sortDesc), ['z', 'x', 'g', 'a']);
    assert.deepEqual(['z', 'z', 'a', 'z'].sort(sortDesc), ['z', 'z', 'z', 'a']);
    assert.deepEqual(['zz', 'z', 'aa', 'a'].sort(sortDesc), ['zz', 'z', 'aa', 'a']);
    assert.deepEqual(['aba', 'aab', 'acc', 'abb', 'aabb'].sort(sortDesc), ['acc', 'abb', 'aba', 'aabb', 'aab']);
  });
});

