var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'proyecto_oraculo'
});

connection.connect(
    (err)=> {
        if (!err){ console.log("Conexion establecida");}
        else { console.log("Conexion fallida")}
    }

);
module.exports = connection;

/*connection.query("SELECT * FROM problemas" , function(err, resultados){

    console.log(resultados);

})*/





//connection.end();