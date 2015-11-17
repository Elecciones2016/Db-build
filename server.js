var senadores = require("./senadores/fuentes/base");
var partidos = require("./partidos/fuentes/base");
var ruts = require("./comunes/ruts");

senadores.run();
partidos.run();
//console.log(ruts.getRut('ANDRES ALLAMAND'));
//console.log(ruts.prepareName("Allamand Zavala, Andrés"));
