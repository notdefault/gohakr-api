'use strict';

var express = require('express')
    require('express-namespace')
    require('express-mongoose')
var config = require('./libs/config'),
    response = require('./libs/response'),
    space = require('./libs/space'),
  search = require('./libs/search')

var app = express();

app.namespace('/api', function(){
    app.post('space/add', space.addSpace)

    app.get('search/:space', search.getSpaces)
});

app.listen(config.app.port);
console.log('Listening on port ' + config.app.port);
