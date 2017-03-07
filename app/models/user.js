var db = require('../config');
var Link = require('./link');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');


var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  link: function() {
    return this.hasMany(Link);
  },
  initialize: function() {



// Delete saltkey from db
    // use bcrypt to get saltkey
    // use bcrypt.hash to generate hashes
    // model.set('haskey')  //hashkey generated should be set to model here.

    // this.on('creating', function(model, attrs, options) {
    //   var shasum = crypto.createHash('sha1');
    //   shasum.update(model.get('url'));
    //   model.set('code', shasum.digest('hex').slice(0, 5));
    // });
  }
});

module.exports = User;
