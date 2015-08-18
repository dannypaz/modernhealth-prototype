'use strict';
// 1. Resident Artist Section (Private)

// As an Assemble Resident artist I would like to....

// View the studio calendar details
// Book a session via the studio calendar 
  // Fill two session collaborator seats 
  // Fill engineer seat
  // Fill producer seat 
  // Submit specific session request 
// Join a session as a collaborator (max two)
var mysql = require('mysql');
var db = require('../config/database');

module.exports = {
  get: function(req, res, next) {
    var locals = {
      title: 'Express'
    };
    res.render('views/resident_artist', locals);
  },
  post: function(req, res, next){
    // Here you will need to figure out which thing they are talking about
    //
    // Who is the one who decides this?
    // Two session collaborator seats?
    // Engineer Seat?
    // Fill producer seat?

    var data = req.body;
    var mode = data["!nativeeditor_status"];
    var sid = data.id;
    var tid = sid;

    delete data.id;
    delete data.gr_id;
    delete data["!nativeeditor_status"];

    var sql = "";

    // Need this for dxhtml
    if (mode == "updated"){
      sql = "UPDATE calendar";
    }else if (mode == "inserted"){
      sql = "INSERT INTO tracks ('filename','title','artist','album','year'" + 
                  ",'tracknumber','genre','encoder') VALUES (?,?,?,?,?,?,?,?);";
    }else if (mode == "deleted"){
      sql = "DELETE users WHERE id = '?'";
    }else{
      res.send("Not supported operation");
    }

    var updateResponse = function(err, rows){
      if (err){
        mode = "error";
      }else if (mode == "inserted"){
        tid = data._id;
      }

      res.setHeader("Content-Type","text/xml");
      res.send("<data><action type='"+mode+"' sid='"+sid+"' tid='"+tid+"'/></data>");
    };

    db.query(sql, values, updateResponse);
  }
};
