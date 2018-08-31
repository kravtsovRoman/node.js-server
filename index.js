var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/about.html');
});

app.get('/news/:id', function (req, res) {

    var obj = {
      pagagrafs: [
          'Первый',
          'Второй',
          'Третий',
          '4',
          'пятый 5',
          6
      ]
    };
    res.render('news', {
        newsId: req.params.id,
        obj: obj
    });
});

app.listen(3000);


