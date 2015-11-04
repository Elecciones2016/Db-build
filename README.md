# Scripts para generar la BD de la API #

[![Build Status](https://travis-ci.org/Elecciones2016/Db-build.svg?branch=master)](https://travis-ci.org/Elecciones2016/Db-build)
[![Code Climate](https://codeclimate.com/github/Elecciones2016/Db-build/badges/gpa.svg)](https://codeclimate.com/github/Elecciones2016/Db-build)

Con este script se puede construir la base de datos en MongoDB que proverá de datos a la API
usada por las aplicaciones de Elecciones2016.

### Para construir ###

Primero se debe instalar los modulos de node

    $ npm install

Simplemente se debe correr con Node el archivo `server.js`

    $ node server.js

Por ahora, esto genera un archivo `output.json` con la información, aún falta migrar esa información a la BD

### Estructura de directorios ###

Los directorios se graban con la siguiente estructura

    root/
    ├──senadores/
    │   ├──fuentes/
    │   └──senadores.json
    ├──diputados/
    │   ├──fuentes/
    │   └──diputados.json
    ...
    ├──server.js
    └──output.json

en el directorio `fuentes` de cada sección, se encuentran los archivos js que coleccionan la información, esta es generada en un archivo json que se encuentra en el mismo directorio que la carpeta fuentes. El archivo `server.js` genera cada uno de estos json y los integra en un archivo `output.json`. Eventualmente, este archivo también debe tomar la información del archivo de salida para poblar la base de datos.
