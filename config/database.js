var mysql = require('mysql');

// These connection settings need to be changed
// to process.ENV for production

var pool = mysql.createPool({
  host: 'localhost',
  user: 'dev',
  password: 'password123'
});

module.exports = {
  init: function(callback){
    var users = [
      { username: 'dev', password: 'password123', firstName: 'Danny', lastName: 'Paz'}
    ]
    // Need to change for insert
    var sql = 'SELECT * from users';
    pool.getConnection(function(err, connection){
      if (err) throw err;

      connection.query(sql, function(err, rows, fields){
        connection.release();
        callback(rows);
      });
    });
  }
};