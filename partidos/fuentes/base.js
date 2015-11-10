var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var url;
var data;
var partidos = [];

url = 'http://www.senado.cl/appsenado/index.php?mo=senadores&ac=comites_senador';

exports.run = function(){
  request(url, function(error, response, html){
    if(!error){
      // Empezamos a registrar
      var $ = cheerio.load(html);

      data = $('.articulos article');

      data.each(function(i, eleme){
        /**
         * @nombre = nombre del partido
         * @integrantes = numero (senadores) de integrantes
         * @senadores = nombre de cada integrante
         */
        var nombre, integrantes, senadores;
        var partido = {};

        nombre = $(this).find("th").first().text();

        //se usa .html() en vez de .text() para poder separar por <br>, pero provoca problemas con las tildes
        senadores = $(this).find("tr").last().children().last().html().split("<br>");

        //por lo que se remueven manualmente las tildes

        //  á = &#xE1;
        //  é = &#xE9;
        //  í = &#xED;
        //  ó = &#xF3;
        //  ú =       --> no hay
        //  ñ = &#xF1;

        for(var j=0;j<senadores.length;j++){
          senadores[j] = senadores[j].replace(/&#xE1;/g, "á");
          senadores[j] = senadores[j].replace(/&#xE9;/g, "é");
          senadores[j] = senadores[j].replace(/&#xED;/g, "í");
          senadores[j] = senadores[j].replace(/&#xF3;/g, "ó");
          senadores[j] = senadores[j].replace(/&#xF1;/g, "ñ");

        }
        console.log(senadores);

        integrantes = senadores.length;

        partido.nombre = nombre;
        partido.integrantes = integrantes;
        partido.senadores = senadores;

        partidos.push(partido);
      });

      fs.writeFile('partidos/partidos.json', JSON.stringify(partidos, null, 4), function(err){
        if(err){
          console.log(err);
        }

      });
    }
  });
};
