var index = require('./index');
var catalog = require('./catalog');
var catalogArtist = require('./catalogArtist');
var residentArtist = require('./residentArtist');

module.exports = function(app){
  app.use('/', index);
  app.use('/users', routes.users.getUser);
};