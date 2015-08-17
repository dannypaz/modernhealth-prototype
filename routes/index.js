'use strict';

module.exports = {
  get: function(req, res, next){
    res.render('views/index', { title: 'Express' });
  }
};
