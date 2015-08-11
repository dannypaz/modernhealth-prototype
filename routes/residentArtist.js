// 1. Resident Artist Section (Private)

// As an Assemble Resident artist I would like to....

// View the studio calendar details
// Book a session via the studio calendar 
  // Fill two session collaborator seats 
  // Fill engineer seat
  // Fill producer seat 
  // Submit specific session request 
// Join a session as a collaborator (max two)

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admin/resident', function(req, res, next) {
  res.render('views/resident_artist', { title: 'Express' });
});

module.exports = router;
