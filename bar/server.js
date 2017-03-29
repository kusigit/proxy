var express = require('express');
var app = express();

console.log(__dirname);

app.use(express.static(__dirname + '/index.html'));

// app.get('/bar', function(req, res){  
 // res.send('hello world');
//});

app.listen(8080);
