'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    config = require('./config'),
    Promise = mongoose.Promise;
    mongoose.connect('mongodb://' + config.mongodb.host + '/' + config.mongodb.database)

var space = {}
space.SpaceSchema = new Schema(
    { name: String
    , address: String
    , address2: String
    , city: String
    , state: String
    , hidden: Boolean
    })
space.Space = mongoose.model('Space', space.SpaceSchema);
space.addSpace = function(req, res){
  var response =
  { status: 200
  , spaces: []
  }
  res.send(JSON.stringify(response))
}

space.getSpace = function(query,res){
  space.Space.find({})
    .exec(function(err, data){
      if( err )
        promise.error(err)

      query = query.toLowerCase()
      var meetsQuery = [];
      for(var i in data){
        if(data[i]._doc.city.toLowerCase() == query 
          || data[i]._doc.state.toLowerCase() == query
          || data[i]._doc.name.toLowerCase() == query
        ){
          meetsQuery.push(data[i]._doc)
        }
      }
      var response =
      { status: 200
      , spaces: meetsQuery
      , qty: meetsQuery.length
      }
      res.send(JSON.stringify(response))
    })
}

var findForQuery = function(query){
  return function(err, data){
    
  }
}

module.exports = space;

