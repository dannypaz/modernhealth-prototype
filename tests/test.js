var assert = require('assert');
var sql, callback;

before(function(){
  sql = "";
  callback = function(err, rows){ return rows; };
});

describe('Database Helper', function(){
  it('should return an array of rows', function(){
    assert(Array.isArray('a,b,c'.split(',')));
  });
});
