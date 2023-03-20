var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

/*GET section. (cargaproblemas.ejs)*/
router.get('/', function(req, res, next) {

    res.render('cargaproblemas', { title: 'Carga de Problemas' });
  });

  

module.exports = router;