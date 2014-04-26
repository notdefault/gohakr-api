'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    config = require('./config'),
    space = require('./space');


var search = {}
search.getSpaces = function(req, res){
  space.getSpace(req.param('space'),res)
}

module.exports = search;

