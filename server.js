var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var app = express();

app.use(sassMiddleware({
    src: 'src',
    dest: 'dev',
    debug: true,
}));
app.use(express.static('dev'));
app.listen(3000, (req, res) => console.log('Example app listening on port 3000!'))