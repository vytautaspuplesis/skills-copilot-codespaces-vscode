// Create web server for comments
// 2016-02-02    PV

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/post', function (req, res) {
    console.log(req.body);
    res.send('ok');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
