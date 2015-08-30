'use strict';
//
//var express = require('express');
//var app = express();

var app = require('express')();
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('view engine','html');
app.use(bodyParser.urlencoded());

app.use(function(req, res, next) {
    console.log('middleware A');
    next();
});

app.use(function(req, res, next) {
    var start = Date.now();
    var method = req.method;
    var url = req.url;

    res.on('finish', function() {
        var time = Date.now() - start;
        console.log(time,method, url);
    });
    next();
});

app.get('/', function(req, res) {
    res.render('index', {
        data: 'Vietworm',
        title: 'Express Framework'
    })
});

app.post('/', function(req, res) {
    var data = req.body;
    console.log(data);
    res.sendStatus(200);
});

//app.get('/', function(req, res) {
//    res.write('Express\n');
//    res.end('xxx');
//});
//
//app.get('/send', function(req, res) {
//    res.send('Express res.send()');
//});

app.listen(1337, function() {
    console.log('Server started on port: 1337');
});