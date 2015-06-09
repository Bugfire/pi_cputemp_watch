/**
 * @license pi_cputemp_watch v0.0.1
 * (c) 2015 Bugfire http://ol.eek.jp/blog/
 * License: MIT
 */

var config = require('./config');
var util = require('./util');

var fs = require('fs');

var get_temp = function() {
  var text = fs.readFileSync(config.tempfile).toString();
  return text / 1000.0;
}

var sampling = 20;
var counter = sampling;
var temp = 0;

var get_temp_x = function() {
  counter--;
  if (counter < 0) {
    temp = temp / sampling;
    var currentTime = util.getCurrentTime(config);
    var queries = [
      'INSERT INTO ' + config.pdb + ' (Datetime,Val) VALUES ("' + currentTime + '",' + temp + ')'
    ];
    util.sendQueries(config, queries, function() {
      process.exit();
    });
  } else {
     temp += get_temp();
     setTimeout(get_temp_x, 250);
  }
}

get_temp_x();
