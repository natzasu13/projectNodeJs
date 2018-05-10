/* variables con el nombre del modulo de node js*/

var http = require("http"),
	fs=require("fs");

/*leer el archivo html, forma sincrona*/
/*var html = fs.readFileSync("./index.html")*/


/*Crear servidor*/
http.createServer(function(request, response){
	/*forma asincrona, la que mas se usa. segundo parametro function... es el callback para que la pagina no se caiga...*/
	fs.readFile("./index.html", function(error, html){

			/*response.writeHead(200, {"Content-Type":"text/html"});/*Encabezad de la pagina, con codigo de servidor 200 es decir que todo salio bien. codigo 300 que movi algo de lugar, 400 no se encontro lo que pidio y 500 hubo algun error*/
			/*response.write(html);*/
			
			response.writeHead(200,{"Content-Type":"application/json"})
			response.write(JSON.stringify({nombre:"Natalia Zartha", username:"nata"}));
		
			response.end();/*cierra la conección*/
		});

}).listen(8080);
