'use';

var Suite = require('benchmarked');
var suite = new Suite({
  code: 'code/*.js',
  fixtures: 'fixtures/*.js',
  cwd: __dirname
});

suite.run();
