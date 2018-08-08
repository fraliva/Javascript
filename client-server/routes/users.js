var express = require('express');
var assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();

// Creates a JSON client
var client = restify.createJsonClient({
  url: 'http://localhost:4000'
});

/* GET users listing. Express - servidor local */
router.get('/', function(req, res, next) {
  
  // Restify
  // client.basic('$login', '$password');
  client.get('/users', function(err, request, response, obj) {
    assert.ifError(err);
  
    // console.log(JSON.stringify(obj, null, 2));
    res.end(JSON.stringify(obj, null, 2));

  });

});

module.exports = router;
