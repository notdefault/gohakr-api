'use strict';

var express = require('express')
    require('express-namespace')
var config = require('./libs/config'),
    response = require('./libs/response')

var app = express();

app.namespace('/api', function(){
    app.get('*', response.404);
};

app.listen(config.app.port);
console.log('Listening on port ' + config.app.port);
