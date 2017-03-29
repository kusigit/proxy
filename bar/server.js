var express = require('express');
var app = express();

console.log(__dirname);

// app.use(express.static(__dirname + '/bar'));

app.get('*', function(req, res){  

 console.log(req);
 
 res.sendfile('index.html');
});

app.listen(8080);
