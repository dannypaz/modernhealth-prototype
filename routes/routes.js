'use strict';

var index = require('./index');
var artistCatalog = require('./artistCatalog');
var residentArtist = require('./residentArtist');

var mysql = require('mysql');
var db = require('../config/database');

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
      if (err) res.send('error');
      res.send('success');
    });
  });

};
