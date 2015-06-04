/**
 * @license pi_cputemp_watch v0.0.1
 * (c) 2015 Bugfire http://ol.eek.jp/blog/
 * License: MIT
 */

var config = require('./config');
var util = require('./util');

var fs = require('fs');

var text = fs.readFileSync(config.tempfile).toString();
var temp = text / 1000.0;

var currentTime = util.getCurrentTime(config);
var queries = [
  'INSERT INTO ' + config.pdb + ' (Datetime,Val) VALUES ("' + currentTime + '",' + temp + ')'
];

util.sendQueries(config, queries, function() {
  process.exit();
});
