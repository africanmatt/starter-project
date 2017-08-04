'use strict'

var express = require('express');
var helmet = require('helmet');
var naked = require('express-naked-redirect');
var path = require('path');
var secure = require('express-force-https');

var app = express();
var port = process.env.PORT || 8080;

/*
    Middleware
*/
app.use(secure);
app.use(naked(true));
app.use(helmet());

app.use('/dist', express.static(path.join(__dirname, 'dist')));

/*
    Routes
*/
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use(function (req, res) {
    res.status(404).sendFile(__dirname + '/404.html');
});

app.listen(port, function () {
    console.log('Web server listening on port ' + port + '!');
});
