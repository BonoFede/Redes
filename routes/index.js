var express = require('express');
var router = express.Router();

/* GET home page.(index.ejs) */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Oraculo' });
});


/* GET section. (estudiantes.ejs)*/
router.get('/estudiantes', function(req, res, next) {
  res.render('estudiantes', { title: 'Estudiantes' });
});

/* GET section. (docentes.ejs)*/
router.get('/docentes', function(req, res, next) {
  res.render('docentes', { title: 'Docentes' });
});

/* GET section. (problemas.ejs)
router.get('/problemas', function(req, res, next) {
  res.render('problemas', { title: 'Problemas' });
});*/


module.exports = router;
