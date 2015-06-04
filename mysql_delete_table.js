/**
 * @license pi_cputemp_watch v0.0.1
 * (c) 2015 Bugfire http://ol.eek.jp/blog/
 * License: MIT
 */

var config = require('./config');
var util = require('./util');

var queries = [
  'DELETE FROM ' + config.pdb + ';',
  'DROP TABLE ' + config.pdb + ';'
];

console.log(queries);

util.sendQueries(config, queries, function() {
  process.exit();
});
