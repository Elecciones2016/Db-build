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
        var newSenadores = [];
        
        nombre = $(this).find("th").first().text();
        
        senadores = $(this).find("tr").last().children().last().html().split("<br>");
        
        for(var i = 0; i< senadores.length; i++){
          var senador = {};
          var arr = senadores[i].split(",");
          
          senador.nombre = arr[1];
          senador.apellido = arr[0];
          
          newSenadores.push(senador);
        }
        
        integrantes = senadores.length;
        
        partido.nombre = nombre;
        partido.integrantes = integrantes;
        partido.senadores = newSenadores;
        
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