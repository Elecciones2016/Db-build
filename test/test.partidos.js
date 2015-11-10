var expect = require("chai").expect;
var partidos = require("../partidos/fuentes/base.js");
var fs = require("fs");
var _ = require('underscore');

//para alojar la data
var _partidos = {};
var _nombres = [];
partidos.run();

fs.readFile('partidos/partidos.json', function(err, data){
  //arroja error si no encuentra el archivo
  if (err) throw err;

  _partidos = JSON.parse(data);

  _nombres = _.map(_partidos, function(p){
    return p.nombre;
  });
  //console.log(_senadores);
});

describe("Partidos", function(){
  //tests a realizar
  //  1- verificar que se genere el archivo partidos.json
  describe("los scripts en el directorio 'fuentes/'", function(){
    it("deben generar un archivo 'partidos.json'", function(){
      //ejecutamos la función
      partidos.run();

      //revisamos que exista el archivo
      fs.readFile('../partidos/partidos.json', function(err, data){
        //arroja error si no encuentra el archivo
        if (err) throw err;

        expect(data).to.exists;
        expect(data).not.to.be.undefined;
        expect(data).not.to.be.null;
      });
    });
  });

  describe("los partidos", function(){
    //  2- verificar que existan 7 partidos
    it("deben ser 7", function(){
      expect(_partidos).to.have.length(7);
    });

    //  3- verificar tengan nombre, integrantes, senadores, partidos
    it("deben tener nombre, de tipo String", function(){
      for(var i = 0; i<_partidos.length;i++){
        expect(_partidos[i]).to.have.property("nombre");
        expect(_partidos[i].nombre).to.be.a('string');
      }
    });

    it("deben tener integrantes, de tipo Number", function(){
      for(var i = 0; i<_partidos.length;i++){
        expect(_partidos[i]).to.have.property("integrantes");
        expect(_partidos[i].integrantes).to.be.a('number');
      }
    });

    it("deben tener senadores, de tipo Array", function(){
      for(var i = 0; i<_partidos.length;i++){
        expect(_partidos[i]).to.have.property("senadores");
        expect(_partidos[i].senadores).to.be.instanceof(Array);
      }
    });
    /*
     *  Aún no estan listos los diputados
     *
    it("deben tener senadores, de tipo Array", function(){
      for(var i = 0; i<_partidos.length;i++){
        expect(_partidos[i]).to.have.property("senadores");
        expect(_partidos[i].senadores).to.be.instanceof(Array);
      }
    });*/

    it("deben tener 1 (un) Partido Unión Demócrata Independiente", function(){
      expect(_nombres).to.contain("Partido Unión Demócrata Independiente");
    });

    it("deben tener 1 (un) Partido Democrata Cristiano e Independiente", function(){
      expect(_nombres).to.contain("Partido Democrata Cristiano e Independiente");
    });

    it("deben tener 1 (un) Partido Renovacion Nacional", function(){
      expect(_nombres).to.contain("Partido Renovacion Nacional");
    });

    it("deben tener 1 (un) Partido Socialista", function(){
      expect(_nombres).to.contain("Partido Socialista");
    });

    it("deben tener 1 (un) Partido Por la Democracia", function(){
      expect(_nombres).to.contain("Partido Por la Democracia");
    });

    it("deben tener 1 (un) Independientes", function(){
      expect(_nombres).to.contain("Independientes");
    });

    it("deben tener 1 (un) Partido MAS (Movimiento Amplio Social)", function(){
      expect(_nombres).to.contain("Partido MAS (Movimiento Amplio Social)");
    });
  });

  //  4- verificar que correspondan los nombres de los senadores con los de senadores.json
  //  5- verificar que correspondan los nombres de los partidos con partidos.json

});
