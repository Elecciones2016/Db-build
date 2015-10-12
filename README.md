# Scripts para generar la BD de la API #

Con este script se puede construir la base de datos en MongoDB que proverá de datos a la API
usada por las aplicaciones de Elecciones2016.

### Para construir ###

Simplemente se debe correr con Node el archivo `server.js`

    $ node server.js

Por ahora, esto genera un archivo `output.json` con la información, aún falta migrar esa información a la BD
