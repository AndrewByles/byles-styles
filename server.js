var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var app = express();

app.use(sassMiddleware({
    src: 'src',
    dest: 'dev',
    debug: true,
}));
app.use(express.static('./'))
app.listen(3000, (req, res) => console.log('\x1b[33m','Listening on port 3000'));