var express = require('express');
var bodyParser = require("body-parser");
var logger = require('morgan');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json({
    limit: '25mb'
}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '25mb'
}));
app.use(bodyParser.json({
    type: 'application/json'
}));
app.use(bodyParser.text());
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
	res.send('<h1> jkdshkfjhdksf</h1>')
	// res.sendFile('./public/index.html');
});

app.listen(5000,function(){
	console.log('Listening on 6000 port');
});
