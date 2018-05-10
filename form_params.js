/* variables con el nombre del modulo de node js*/

var http = require("http"),
	fs=require("fs"),
	parser = require("./params_parser.js"),
	render = require("./render_view.js");

	var p = parser.parse;
	var r = render.render;

/*leer el archivo html, forma sincrona*/
/*var html = fs.readFileSync("./index.html")*/


/*Crear servidor*/
http.createServer(function(request, response){

//validar si encuentra "favicon.co" en la cadena de la url
	if(request.url.indexOf("favicon.co")>0)
	{
		return;
	}

	console.log("++++++++++++++++++++++++++++++++");
	console.log(request);
    console.log("++++++++++++++++++++++++++++++++");

	/*forma asincrona, la que mas se usa. segundo parametro function... es el callback para que la pagina no se caiga...*/
	fs.readFile("./index.html", function(error, html){
		
			var arreglo_parametrosURL = [], parametros = {};
			var nombre = "";
			var parametros = p(request);
	

			response.writeHead(200, {"Content-Type":"text/html"});/*Encabezad de la pagina, con codigo de servidor 200 es decir que todo salio bien. codigo 300 que movi algo de lugar, 400 no se encontro lo que pidio y 500 hubo algun error*/
			response.write(r(html,parametros));
			response.end();/*cierra la conección*/
		});

}).listen(8080);
