var fs = require('fs');

var myRedShort = fs.createReadStream(__dirname + '/article.txt', 'utf8');
var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

myRedShort.on('data', (chunk) => {
    myWriteShort.write(chunk);
});


