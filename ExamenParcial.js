// PROTOCOLO DE INTERCAMBIO
var http = require('http');

// CREANDO EL SERVIDOR MEDIANTE EL USO DE PROTOCOLO HTTP
var server = http.createServer();

// SERVICIO WEB
function mensaje(req, resp) {
    // ESTADO 200 SATISFACTORIO, MENSAJE DE TIPO TEXTO PLANO CONFIGURADO MEDIANTE JSON 
    resp.writeHead(200, { 'Content-Type': 'text/plain' });
    // ESCRIBO EL MENSAJE EN TEXTO PLANO
    resp.write('HOLA MI NOMBRE ES MILTON RAMOS TENGO 21 AÑOS, SOY UN ESTUDIANTE DE LA CARRERA DE DESARROLLO DE SOFTWARE, VENGO DE LA CIUDAD DE QUITO Y YA ME QUIERO IR A MI CASA');
    // FINALIZO LA COMUNICACIÓN ENTRE EL CLIENTE Y EL SERVIDOR 
    resp.end();
}

// EVENTO REQUEST QUE INVOCARÁ LA FUNCIÓN MENSAJE
server.on('request', mensaje);

// LEVANTANDO EL SERVIDOR
server.listen(3000, function () {
    console.log("La solicitud fue realizada mediante el puerto 3000//ramos");
    console.log("Accede en: http://localhost:3000//ramos");
});
