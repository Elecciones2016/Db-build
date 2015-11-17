var xlsx = require('xlsx');

exports.getRut = function(nombre){

  var workbook = xlsx.readFile('data/DETALLE_INGRESOS_CANDIDATOS_ELECCION2013.xls');
  //console.log(typeof workbook);

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
