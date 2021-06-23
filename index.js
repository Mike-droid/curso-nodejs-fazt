"use strict";
exports.__esModule = true;
var http = require('http');
var handleServer = function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' }); //* Todo OK
    //res.writeHead(404) error 404 => no encontrado
    res.write('<h1>Hola mundo desde TypeScript y Node JS</h1>');
    res.end();
};
var server = http.createServer(handleServer);
server.listen(6969, function () { return console.log('Server on port 6969'); });
//const fs = require('fs')
//*Código asíncrono
/* fs.writeFile('./texto.txt', 'Línea 1', (error:Error) => { //!callback
  if(error) console.log(error)

  console.log('Archivo creado')
});

console.log('Última línea de código') */
/* fs.readFile('./texto.txt', (error:Error, data:string)=>{
  if (error) {
    console.log(error)
  }
  console.log(data.toString())
}) */ 
