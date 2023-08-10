var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");
const problemasController=require("../controllers/problemasController");
var problema=require("../model/problema");
var app = express();
//router.use(express.urlencoded({ extended: true }));
//router.use(express.json());

/*GET section. (cargaproblemas.ejs)
router.get('/', function(req, res, next) {
  
    res.render('cargaproblemas', { title: 'Carga de Problemas' });
  }); */

router.get('/', function(req, res, next) {

    db.query("SELECT * FROM problemas" , function(err, resultados){
    
        res.render('cargaproblemas', { title: 'Problemas', Problemas:resultados });
        
    
    })
    });
//router.get('/', problemasController.index);
//router.get('/crear', problemasController.crear);

// Ruta para crear un nuevo registro
//router.post('/', problemasController.guardar);  
  



  

module.exports = router;