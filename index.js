var express = require('express');
var app = express();

app.use(express.static('./'))
app.listen(3000, (req, res) => console.log('\x1b[33m','Listening on port 3000'));