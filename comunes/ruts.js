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
    //console.log(sheet['G' + cell[1]].v); break;
  }
};
