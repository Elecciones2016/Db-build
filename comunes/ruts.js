var xlsx = require('xlsx');
var request = require('request');

/**
 *  Obtiene el rut a partir del nombre que hay en los datos del SERVEL
 */
exports.getRut = function(nombre){

  var workbook = xlsx.readFile('data/DETALLE_INGRESOS_CANDIDATOS_ELECCION2013.xls');

  var sheet_name = workbook.SheetNames[0];
  var sheet = workbook.Sheets[sheet_name];

  for(cell in sheet){
    //en la columna 'H' estan los nombres de candidatos, en la 'G' los ruts
    if(cell[0] !== 'H') continue;
    if(sheet[cell].v !== nombre) continue;
    //console.log(cell + '  ' +cell.length);
    var rut = sheet['G' + cell.slice(1, cell.length)].v;
    return rut;
  }
  return null;
};

/**
 *  Obtiene el nombre a partir de
 */
exports.getRutFromUrl = function(nombre, url){
  //si no se ingresa otra url, se usa la url por defecto
  //por ahora se deja así, pero para que funcione efectivamente por cualquier url,
  //se debiese recibir un objeto o más parametros, como los id de los inputs entre otros
  if(typeof url === 'undefined') url = 'http://datos.24x7.cl/get_generic_ajax/';

  request.post({
    url: url,
    form: {
      entrada: nombre,
      csrfmiddlewaretoken: "y31XFsEBf8JV0l8vXxgr9h346zwAKnqV"
    }
  }, function(err,httpResponse,body){
    console.log(body);
  });
}

/**
 *  "Allamand Zavala, Andrés"  =>  'ANDRES ALLAMAND'
 */
exports.prepareName = function(nombreViejo){
  var nombe, apellido;

  nombre = nombreViejo.split(",")[1];
  nombre = nombre.toUpperCase();

  //elimino acentos
  nombre = nombre.replace(/Á/g, 'A');
  nombre = nombre.replace(/É/g, 'E');
  nombre = nombre.replace(/Í/g, 'I');
  nombre = nombre.replace(/Ó/g, 'O');
  nombre = nombre.replace(/Ú/g, 'U');

  nombre = nombre.trim();
  //console.log(nombre);

  apellido = nombreViejo.split(",")[0];
  apellido = apellido.split(" ")[0];
  apellido = apellido.toUpperCase();

  //elimino acentos
  apellido = apellido.replace(/Á/g, 'A');
  apellido = apellido.replace(/É/g, 'E');
  apellido = apellido.replace(/Í/g, 'I');
  apellido = apellido.replace(/Ó/g, 'O');
  apellido = apellido.replace(/Ú/g, 'U');

  apellido = apellido.trim();
  //console.log(apellido);

  return nombre + " " + apellido;
};
