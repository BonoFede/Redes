var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");
//var problema=require("../model/problema");
//const problemasController=require("../controllers/problemasController");


/*GET section. (problemas.ejs)*/
router.get('/', function(req, res, next) {
    res.render('crear' , { title: 'Crear Problema' });

});

router.post('/crear', function (req, res,next) {
    const { nombre, descripcion, oraculo, test, codigo } = req.body;
    /*const newProblema = {
        nombre,
        descripcion,
        oraculo,
        test,
        codigo
    };
    await db.query('INSERT INTO problemas set ?', [newProblema]);
    req.flash('success', 'Link Saved Successfully');
    res.redirect('/crear');*/
    const sql = 'INSERT INTO problemas (nombre, descripcion, oraculo, test, codigo) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [nombre, descripcion, oraculo, test, codigo], (error, results) => {
    if (error) {
      console.error('Error al guardar los datos:', error);
      res.send('Error al guardar los datos.');
    } else {
      console.log('Datos guardados exitosamente.');
      res.redirect('/');
    }
});
});
module.exports = router;