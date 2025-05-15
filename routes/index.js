var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    dever: 'Dever de Casa',
    tjade: 'Testes com a template engine Jade'
   });
});

module.exports = router;
