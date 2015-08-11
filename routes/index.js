var mysql = require('mysql');

module.exports = {
  get: function(req, res, next){
    res.render('views/index', { title: 'Express' });
  }
};
