var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var url = "";
var json;

app.get('/scrape', function(req, res){

  url = 'http://www.senado.cl/appsenado/index.php?mo=senadores&ac=fichasenador&id=905';
  
  request(url, function(error, response, html){

    // First we'll check to make sure no errors occurred when making the request

    if(!error){
      // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
      console.log("no error");
      var $ = cheerio.load(html);

      // Finally, we'll define the variables we're going to capture

      var nombre, partido, telefono, mail;
      json = { nombre : "", partido : "", telefono : "", mail : ""};
      
      nombre = $('section.seccion1 .info h1.serif').text();
      
      console.log("nombre: " + nombre);
      json.nombre = nombre;
      
      fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

        console.log('File successfully written! - Check your project directory for the output.json file');
      
      });
      
    }else{
      console.log("some error");
    }
  });

});



app.listen(process.env.PORT);

console.log('Magic happens on port ' + process.env.PORT);

exports = module.exports = app;