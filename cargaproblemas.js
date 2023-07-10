var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

/*GET section. (cargaproblemas.ejs)*/
router.get('/', function(req, res, next) {

    res.render('cargaproblemas', { title: 'Carga de Problemas' });
  });

// Ruta para crear un nuevo registro
app.post('/crear', (req, res) => {
  const { campo1, campo2, campo3 } = req.body; // Obtén los datos enviados desde el formulario

  // Realiza la consulta SQL para insertar los datos en la base de datos
  connection.query('INSERT INTO tabla (campo1, campo2, campo3) VALUES (?, ?, ?)', [campo1, campo2, campo3], (error, results) => {
    if (error) {
      console.error('Error al crear el registro: ', error);
    } else {
      console.log('Registro creado exitosamente.');
      res.redirect('/'); // Redirecciona a la página principal después de crear el registro
    }
  });
});

  

module.exports = router;