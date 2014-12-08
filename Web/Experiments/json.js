var jf = require('jsonfile'),
	util = require('util');

var file = 'data/data.json';
var obj = {name: 'JP'};

jf.writeFile(file, obj, function(err) {
	console.log(err)
});

jf.readFile(file, function(err, obj) {
	console.log(util.inspect(obj));
});