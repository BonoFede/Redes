var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

/*GET section. (nosotros.ejs)*/
router.get('/', function(req, res, next) {


    //db.query("SELECT * FROM problemas" , function(err, resultados){

    res.render('nosotros', { title: 'Nosotros somos'});



  }); //});

  

module.exports = router;



  