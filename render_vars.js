/* variables con el nombre del modulo de node js*/

var http = require("http"),
	fs=require("fs");

/*leer el archivo html, forma sincrona*/
/*var html = fs.readFileSync("./index.html")*/


/*Crear servidor*/
http.createServer(function(request, response){
	/*forma asincrona, la que mas se usa. segundo parametro function... es el callback para que la pagina no se caiga...*/
	fs.readFile("./index.html", function(error, html){

			var html_string = html.toString();
			/*expresion regular para buscar patron entre llaves*/
			var variables = html_string.match(/[^\{\}]+(?=\})/g); 
			var nombre = "Natalia desde codigo";

			// variables ['nombre']
			for (var i = variables.length - 1; i >= 0; i--) {
				//lo ejecutamos como codigo de javascript, para obtener el valor de dicha variable
				var value = eval(variables[i]);

				//Reemplazar el contigo con llaves por su valor correspondiente
				html_string = html_string.replace("{"+ variables[i] +"}", value);

			}

			response.writeHead(200, {"Content-Type":"text/html"});/*Encabezad de la pagina, con codigo de servidor 200 es decir que todo salio bien. codigo 300 que movi algo de lugar, 400 no se encontro lo que pidio y 500 hubo algun error*/
			response.write(html_string);
			response.end();/*cierra la conección*/
		});

}).listen(8080);
