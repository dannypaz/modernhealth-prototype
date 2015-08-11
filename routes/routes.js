var index = require('./index');
var artistCatalog = require('./artistCatalog');
var residentArtist = require('./residentArtist');

// For testing only
var mysql = require('mysql');
var config = require('../config/config');

module.exports = function(app){
  // Index
  app.get('/', index.get);

  // Admin - Catalog Routes
  app.get('/admin/catalog', artistCatalog.admin.get);
  app.post('/admin/catalog', artistCatalog.admin.post);
  app.delete('/admin/catalog', artistCatalog.admin.delete);

  // Admin - Resident Routes
  app.get('/admin/resident', residentArtist.get);

  // Catalog Routes
  app.get('/catalog', artistCatalog.get);





  // Initial start of application
  app.get('/init', function(req, res){
    db.init(function(err, results){
      if (err) throw err;

      console.log('DB successfully initialized');
    });
  });

};