var express = require('express'),
	bodyParser = require('body-parser'),
	ejs = require('ejs'),
	fs = require('fs'),
	util = require('util');

var outputFile = 'data/data.json';
var app = express();

app.set('views', './views');

app.listen(8000);

app.engine('html', require('ejs').__express);

app.post('/send', bodyParser(), function(req, res) {
	if(req.body) 
	{
		var obj = {};
		var content = {imageURL : req.body.imageURL, infoText: req.body.informationText, postDate: new Date()};

		fs.readFile(outputFile, function(err, data) {
			//if(err) throw err;
			obj = JSON.parse(data);
			obj.events.push(content);
			console.log(obj);

			fs.writeFile('data/data.json', JSON.stringify(obj), function(err) {
				if(err) throw err;
				console.log("It\'s saved!");
			});
		});

		if(acceptsHtml(req.headers['accept'])) 
		{
			res.redirect('/', 302)
		} 
		else 
		{
			var message = {status:"ok", message:"Input Recieved"} 
			res.send(message);
			console.log(message);
		}
	} 
	else 
	{
		//no tweet?
		var message = {status:"nok", message:"No tweet receieved"} 
			res.send(message);
			console.log(message);
	}
});

app.get('/', function(req, res) {
	var title = 'Chirpie',
		header = 'Welcome to Chirpie',
		chirp = 'nothing';

	res.render('layout.html', {
		locals: {
			'title' : title,
			'header' : header,
			'chirp' : chirp,
			// stylesheets : ['/public/style.css']
		}
	});
});

function acceptsHtml(header) {
	var accepts = header.split(',');
	for(i=0;i<accepts.length;i++) {
		if(accepts[i] === 'text/html') { return true};
	}
	return false;
}

