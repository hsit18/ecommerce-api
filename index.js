var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var path = require("path");
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';


app.all('/api', function(req, res, next) {
    console.log("common handling for all API");
    res.send('heroku deploy testing .....');
    next();
});

app.listen(port, function() {
    console.log('Server listening on port ...'+ port);
});

process.on('SIGINT', function() {
    console.log('Stopping the server app....');
    //appConfig.stop(function () {
        console.log('Server Stopped..');
        process.exit(1);
    //});
});