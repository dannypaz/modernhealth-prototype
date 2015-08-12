var mysql = require('mysql');

// These connection settings need to be changed
// to process.ENV for production

var pool = mysql.createPool({
  host: 'localhost',
  user: 'dev',
  password: 'password123'
});

var query = function(sql, callback){
  pool.getConnection(function(err, connection){
    if (err) console.log(err);

    connection.query(sql, function(err, rows, fields){
      if (err) console.log(err);
      connection.release();
      callback(err, rows);
    })
  });
};

module.exports = {
  init: function(callback){
    var users = [
      { username: 'dev', password: 'password123', firstName: 'Danny', lastName: 'Paz'}
    ]
    // Need to change for insert
    var sql = 'SELECT * from users';
    
    // Run init
    query(sql, callback);
  },
  // Break this up into insert, select, delete
  // and add limits
  query: query
};