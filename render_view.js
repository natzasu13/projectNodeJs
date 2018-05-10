function render(html,parametros)
{

		var html_string = html.toString();
		var variables = html_string.match(/[^\{\}]+(?=\})/g); 

		// variables ['nombre']
			for (var i = variables.length - 1; i >= 0; i--) {
				//lo ejecutamos como codigo de javascript, para obtener el valor de dicha variable
				var variable = variables[i];
				//parametros[variable]   es decir... parametros[nombre]
				//Reemplazar el contigo con llaves por su valor correspondiente
				html_string = html_string.replace("{"+ variables[i] +"}", parametros[variable]);

			}

	return html_string;

}

/*exportar esta función para que pueda ser utilizada por los demas archivos y no repetir codigo*/
module.exports.render = render;