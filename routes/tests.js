var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

/*GET section. (tests.ejs)*/
router.get('/', function(req, res, next) {

    res.render('tests', { title: 'Testear código' });
  });

  

module.exports = router;