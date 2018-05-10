function parse(request){
	
	var arreglo_parametrosURL = [], parametros = {};
	//buscar si en la url nos estan enviando parametros ejemplo: http://localhost:8080/?nombre=natalia
	if(request.url.indexOf("?") >0)
			{
				//?nombre=natalia&apellido=zartha
				var url_data = request.url.split("?");
				arreglo_parametrosURL = url_data[1].split("&");

	}

	for (var i = arreglo_parametrosURL.length - 1; i >= 0; i--) {
		var parametro  = arreglo_parametrosURL[i];
		//nombre=natalia
		var param_data = parametro.split("=");
		//[nombre,natalia]
		parametros[param_data[0]] =param_data[1];  /*hash*/
		//{nombre:Natalia}
	
	};

	return parametros; /*es un json con los valores de los parametros*/


}


/*exportar esta función para que pueda ser utilizada por los demas archivos y no repetir codigo*/
module.exports.parse = parse;
module.exports.name = "Natalia exports";
