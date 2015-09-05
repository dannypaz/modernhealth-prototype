'use strict';

// As an Assemble Catalog artist I would like to....
//
// FOR MVP
// Download .pdf Paperwork (Done)
// Upload and Submit .pdf Paperwork (Done)
// Submit audio track metadata via form (Done)
//
// FOR 2nd ITERATION
// Electronically sign paperwork without downloading
// NOTE: Should look into HelloSign (https://www.hellosign.com/api)
// Upload Tracks to Catalog (minimum file requirements (.wav / 48x16)

var db = require('../config/database');
var fs = require('fs');

var uploadFileToServer = function(tmpPath, fileName, callback){
  fs.readFile(tmpPath, function(err, data){
    if(err){ 
      return callback(err);
    }

    // Needs to be changed to process.ENV
    var SAVE_PATH = __dirname + "../uploads/" + fileName;

    fs.writeFile(SAVE_PATH, data, function(err){
      if(err) callback(err);
      callback(false);
    })
  })
};

module.exports = {
  admin: {
    get: function(req, res, next){
      var locals = {
        title: 'Express'
      };
      res.render('views/admin_catalog', locals);
    },
    post: function(req, res, next){
      console.log('Received POST at admin/catalog');

      if(req.body){

        // Upload PDF Information
        //var tmpFilePath = req.files.pdf.path;
        var fileName = req.body.fileName;

        // Example Req Data        
        // title: '', artist: '', album: '', year: '',
        // tracknumber: '', genre: '', encoder: ''
        //
        var metaData = req.body;
        var values = [
          fileName,
          metaData.title,
          metaData.artist,
          metaData.album,
          metaData.year,
          metaData.tracknumber,
          metaData.genre,
          metaData.encoder
        ];
        var sql = "INSERT INTO tracks ('filename','title','artist','album','year'" + 
                  ",'tracknumber','genre','encoder') VALUES (?,?,?,?,?,?,?,?);";

        // Start file upload
        //uploadFileToServer(tmpPath, fileName, function(err){
          //if(err) throw err;

          db.query(sql, values, function(err, rows){
            if(err) throw err;
            var locals = {
              SUCCESS: true,
              SUCCESS_MESSAGE: "Catalog and Track Inserted Successfully!"
            };
            res.render('views/admin_catalog', locals);
          });
        //});

      }else {
        var locals = {
          WARNING: true,
          WARNING_MESSAGE: "The information you provided was missing/incorrect. Please try again."
        };
        res.render('views/admin_catalog', locals);
      }
    },
    delete: function(req, res, next){
      console.log('artistsCatalog.delete!');
    }
  },
  get: function(req, res, next){
    db.query('SELECT * from catalog', [], function(err, rows){
      var locals = {
        title: 'Here\'s All Your Data',
        data: rows
      };
      res.render('views/catalog', locals)
    });
  } 
};
