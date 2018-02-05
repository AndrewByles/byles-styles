var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'))
app.listen(3000, (req, res) => console.log('\x1b[33m','Listening on port 3000'));