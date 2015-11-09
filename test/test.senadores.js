var expect = require("chai").expect;
var senadores = require("../senadores/fuentes/base.js");
var fs = require("fs");

//para alojar la data
var _senadores = {};
senadores.run();

fs.readFile('senadores/senadores.json', function(err, data){
  //arroja error si no encuentra el archivo
  if (err) throw err;

  _senadores = JSON.parse(data);

  console.log(_senadores);
});

describe("Senadores", function(){
  //tests a realizar:
  //  1- Verificar que siempre se genere el archivo senadores.json
  //  2- Revisar que el archivo senadores.json contenga un objeto en formato json
  //  3- Revisar que el objeto tenga 38 elementos (senadores)
  //  4- Cada objeto debe tener nombre, mail, region, circunscripcion, telefono
  //  5- Verificar tipo de dato de cada attributo del senador

  //  1-
  describe("los scripts en el directorio 'fuentes/'", function(){
    it("deben generar un archivo 'senadores.json'", function(){
      //ejecutamos la función
      senadores.run();

      //revisamos que exista el archivo
      fs.readFile('../senadores/senadores.json', function(err, data){
        //arroja error si no encuentra el archivo
        if (err) throw err;

        expect(data).to.exists;
        expect(data).not.to.be.undefined;
        expect(data).not.to.be.null;
      });
    });
  });

  //  3-
  describe("los senadores", function(){

    it("debe contener 38 senadores", function(){
      //faltan!!
      expect(_senadores).to.have.length(38);
    });
  });


});
