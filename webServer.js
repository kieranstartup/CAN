var express = require('express'),
	bodyParser = require('body-parser'),
	ejs = require('ejs');

var app = express();
app.set('views', './views');
//app.set('partial','./views/partia')
//app.set('partial', './views/partials');

var tweets = [];

app.listen(8000);

app.engine('html', require('ejs').__express);

// app.get('/', function(req, res) {
// 	res.send('Welcome to Node Twitter');
// });

app.post('/send', bodyParser(), function(req, res) {
	if(req.body && req.body.tweet) 
	{

		tweets.push(req.body.tweet);

		if(acceptsHtml(req.headers['accept'])) 
		{
			res.redirect('/', 302)
		} 
		else 
		{
			res.send({status:"ok", message:"Tweet received"});
		}
	} 
	else 
	{
		//no tweet?
		res.send({status:"nok", message:"No tweet receieved"});
	}
});

app.get('/tweets', function(req, res) {
	res.send(tweets);
});

// app.get('/', function (req, res) {
//   res.render('layout.html', { title: 'Hey', message: 'Hello there!'});
// })

app.get('/', function(req, res) {
	var title = 'Chirpie',
		header = 'Welcome to Chirpie';

	res.render('layout.html', {
		locals: {
			'title' : title,
			'header' : header,
			'chirp' : tweets,
			stylesheets : ['/public/style.css']
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

