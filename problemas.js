var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

/* GET section. (problemas.ejs)*/
router.get('/', function(req, res, next) {

db.query("SELECT * FROM problemas" , function(err, resultados){

    console.log(resultados);
    res.render('problemas', { title: 'Problemas a resolver', Problemas:resultados });
    

})
});

   
  


module.exports = router;