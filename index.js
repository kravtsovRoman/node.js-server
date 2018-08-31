var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('SEND!!!! This is HOME');
});

app.get('/news', function (req, res) {
    res.send(' This is NEWS');
});

app.get('/news/:id', function (req, res) {
    res.send('NEWS ID -' + req.params.id);
});

app.listen(3000);


