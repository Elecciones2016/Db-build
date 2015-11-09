var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var url;
var data;
var senadores = [];

url = 'http://www.senado.cl/appsenado/index.php?mo=senadores&ac=listado';

exports.run = function(){
  request(url, function(error, response, html){

    //1)  Visitamos la página

    if(!error){
      // Empezamos a registrar
      var $ = cheerio.load(html);

      data = $('table td:last-child');
      //console.log(data);
      //Los elementos en las posiciones pares, tienen la información de los senadores
      //el html tiene la siguiente estructura
      //  <td style="width: 85%;">
      //    <div><a href="/appsenado/index.php?mo=senadores&amp;ac=fichasenador&amp;id=905">Allamand Zavala, Andrés</a></div>
      //    <div>Región: <strong>Región Metropolitana </strong> | Circunscripción: <strong>7</strong></div>
      //    <div>Teléfono: (56-32) 2504701 | Email:<a href="mailto:allamand@senado.cl">allamand@senado.cl</a></div>
      //  </td>

      //Los elementos en las posiciones impares, contienen el partido del senado
      //el html tiene la siguiente estructura
      //  <td>
      //    Partido: <strong>R.N.</strong>
      //  </td>
      data.each(function(i, elem){
        var nombre, region, circunscripcion, telefono, mail, str;
        var senador = {};

          nombre = $(this).find("div").first().text();
          //console.log("nombre: " + nombre);
          region = $(this).find("div:nth-child(2)").find("strong").first().text();
          //console.log("region: " + region);
          circunscripcion = $(this).find("div:nth-child(2)").find("strong").first().next().text();
          //console.log("circunscripcion: " + circunscripcion);
          str = $(this).find("div").last().text();
          telefono = str.substr(str.indexOf("("), 15);
          //console.log("telefono: " + telefono);
          mail = $(this).find("div:nth-child(3)").find("a").text();
          //console.log("mail: " + mail);

          //creo el senador
          senador.nombre = nombre;
          senador.region = region;
          senador.circunscripcion = circunscripcion;
          senador.telefono = telefono;
          senador.mail = mail;

          //lo agrego al arreglo de senadores
          senadores.push(senador);
      });

      fs.writeFile('senadores/senadores.json', JSON.stringify(senadores, null, 4), function(err){
        if(err){
          console.log(err);
        }

      });

    }else{
      console.log("Hubo un error: " + error);
    }
  });
};
