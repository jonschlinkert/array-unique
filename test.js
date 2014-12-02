/*!
 * array-unique <https://github.com/jonschlinkert/array-unique>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var should = require('should');
var unique = require('./');

describe('unique', function () {
  it('should throw an error if the value passed is not an array:', function () {
    (function () {
      unique('a', 'b', 'c');
    }).should.throw('array-unique expects an array.');
  });

  it('should return an array with unique values:', function () {
    unique(['a', 'b', 'c', 'a', 'b', 'd']).should.eql(['a', 'b', 'c', 'd']);
    unique(['a', 'b', 'c', 'a', 'b', 'a', 'b', 'c', 'b', 'f', 'a', 'b']).should.eql(['a', 'b', 'c', 'f']);
    unique(['a', 'b', 'c', 'a', 'b', 'a', 'b', 'b', 'f', 'a', 'b', 'x', 'y', 'z', 'a', 'b', 'a', 'b', 'a', 'b', 'b', 'f', 'a', 'b', 'x', 'y', 'z', 'a', 'b', 'a', 'b', 'a', 'b', 'b', 'f', 'a', 'b', 'x', 'y', 'z', 'a', 'b', 'a', 'b', 'a', 'b', 'b', 'f', 'a', 'b', 'x', 'y', 'z', 'a', 'b', 'a', 'b', 'a', 'b', 'b', 'f', 'a', 'b', 'x', 'y', 'z', 'a', 'b', 'a', 'b', 'a', 'b', 'b', 'f', 'a', 'b', 'x', 'y', 'z', 'a', 'b', 'a', 'b', 'a', 'b', 'b', 'f', 'a', 'b', 'x', 'y', 'z', 'a', 'b', 'a', 'b', 'a', 'b', 'b', 'f', 'a', 'b', 'x', 'y', 'z', 'a', 'b', 'a', 'b', 'a', 'b', 'b', 'f', 'a', 'b', 'x', 'y', 'z', 'a', 'b', 'a', 'b', 'a', 'b', 'b', 'f', 'a', 'b', 'x', 'y', 'z', 'a', 'b', 'a', 'b', 'a', 'b', 'b', 'f', 'a', 'b', 'x', 'y', 'z', 'a', 'b']).should.eql(['a', 'b', 'c', 'f', 'x', 'y', 'z']);
    unique(['foo/bar/baz/quux/fez/test/fixtures', 'foo/bar/baz/quux/fez/test/fixtures', 'foo/bar/baz/quux/fez/test/fixtures/a.js', 'foo/bar/baz/quux/fez/test/fixtures', 'foo/bar/baz/quux/fez/test/fixtures', 'foo/bar/baz/quux/fez/test/fixtures/b.js', 'foo/bar/baz/quux/fez/test/fixtures/b.js', 'foo/bar/baz/quux/fez/test/fixtures', 'foo/bar/baz/quux/fez/test/fixtures', 'foo/bar/baz/quux/fez/test/fixtures/a.js', 'foo/bar/baz/quux/fez/test/fixtures/j.js', 'foo/bar/baz/quux/fez/test/fixtures/z.js', 'foo/bar/baz/quux/fez/test/fixtures/c.js', 'foo/bar/baz/quux/fez/test/fixtures/d.js', 'foo/bar/baz/quux/fez/test/fixtures', 'foo/bar/baz/quux/fez/test/fixtures/a.js', 'foo/bar/baz/quux/fez/test/fixtures', 'foo/bar/baz/quux/fez/test/fixtures/h.js', 'foo/bar/baz/quux/fez/test/fixtures/i.js', 'foo/bar/baz/quux/fez/test/fixtures/j.js', 'foo/bar/baz/quux/fez/test/fixtures/k.js', 'foo/bar/baz/quux/fez/test/fixtures/l.js', 'foo/bar/baz/quux/fez/test/fixtures/m.js', 'foo/bar/baz/quux/fez/test/fixtures', 'foo/bar/baz/quux/fez/test/fixtures/a.js']).should.eql([
        'foo/bar/baz/quux/fez/test/fixtures',
        'foo/bar/baz/quux/fez/test/fixtures/a.js',
        'foo/bar/baz/quux/fez/test/fixtures/b.js',
        'foo/bar/baz/quux/fez/test/fixtures/j.js',
        'foo/bar/baz/quux/fez/test/fixtures/z.js',
        'foo/bar/baz/quux/fez/test/fixtures/c.js',
        'foo/bar/baz/quux/fez/test/fixtures/d.js',
        'foo/bar/baz/quux/fez/test/fixtures/h.js',
        'foo/bar/baz/quux/fez/test/fixtures/i.js',
        'foo/bar/baz/quux/fez/test/fixtures/k.js',
        'foo/bar/baz/quux/fez/test/fixtures/l.js',
        'foo/bar/baz/quux/fez/test/fixtures/m.js'
      ]);
  });
});

