var mysql = require('mysql');

// These connection settings need to be changed
// to process.ENV for production

var pool = mysql.createPool({
  host: 'localhost',
  user: 'dev',
  password: 'password123'
});

var query = function(sql, values, callback){
  pool.getConnection(function(err, connection){
    if (err){
      console.log(err);
      return callback(err);
    }

    connection.query(sql, values, function(err, rows, fields){
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
    var sql = "";
    var values = [];
    
    for(var i=0; i<users.length;i++){
      sql += "INSERT INTO users ('username', 'password', 'firstName', 'lastName') VALUES (?,?,?,?)";
      values.push(users[i].username);
      values.push(users[i].password);
      values.push(users[i].firstName);
      values.push(users[i].lastName);
    }
    
    query(sql, values, callback);
  },
  // Break this up into insert, select, delete
  // and add limits
  query: query
};