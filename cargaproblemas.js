var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");
//var app = express();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

/*GET section. (cargaproblemas.ejs)*/
router.get('/', function(req, res, next) {

    res.render('cargaproblemas', { title: 'Carga de Problemas' });
  });

// Ruta para crear un nuevo registro
router.post('/crear', function (req, res)  {
  const { titulo, descripcion, oraculo, test, codigo } = req.body; // Obtén los datos enviados desde el formulario

  // Realiza la consulta SQL para insertar los datos en la base de datos
  db.query("INSERT * INTO problemas (Titulo_problema, Descripcion, Oraculo, Test, Codigo) VALUES (?, ?, ?, ?, ?)", [titulo, descripcion, oraculo, test, codigo], function(error, results) {
    if (error) {
      console.error('Error al crear el registro: ', error);
    } else {
      console.log('Registro creado exitosamente.');
      res.redirect('/'); // Redirecciona a la página principal después de crear el registro
    }
  });
});

  

module.exports = router;