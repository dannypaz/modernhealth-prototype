// As an Assemble Catalog artist I would like to....

// Download .pdf Paperwork (MVP)
// Upload and Submit .pdf Paperwork (MVP)
// electronically fill out paperwork without downloading
// e-sign paperwork
// Wordpress plug in for this: E.g. https://www.approveme.me/
// Submit Track Meta Data via online form (MVP)
// Upload Tracks to Catalog  
// minimum file requirements (.wav / 48x16)

var express = require('express');
var router = express.Router();

module.exports = {
  get: function(req, res, next){
    res.render('views/resident_artist', { title: 'Express' });
  }
};