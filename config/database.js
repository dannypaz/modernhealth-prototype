// TODO
// Change to Sequalize ORM

var mysql = require('mysql');
var bcrypt = require('bcrypt');

// These connection settings need to be changed
// to process.ENV for production

var pool = mysql.createPool({
  host: 'localhost',
  user: 'dev',
  password: 'password123',
  database: 'utitily_app'
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

var generateHash = function(str, callback){
  bcrypt.genSalt(10, function(err, salt){
    if (err) callback(err);

    bcrypt.hash(str, salt, function(err, hash){
      if (err) callback(err);

      callback(err, hash);
    });
  });
};

module.exports = {
  init: function(callback){
    var users = [
      { username: 'dev', password: 'password123', firstName: 'Danny', lastName: 'Paz'}
    ];

    var sql = "";
    var values = [];
    
    for(var i=0; i<users.length;i++){
      sql += "INSERT INTO users ('username', 'password', 'first_name', 'last_name') VALUES (?,?,?,?);";
      values.push(users[i].username);
      values.push(users[i].password);
      values.push(users[i].firstName);
      values.push(users[i].lastName);
    }
    
    query(sql, values, callback);
  },
  // Takes a string and callback
  generateHash: generateHash,
  // Break this up into insert, select, delete
  // and add limits
  query: query
};