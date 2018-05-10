/*Servidor App.js*/

var express = require("express");
var app =  express();

app.set("view engine", "jade");

//Método Http =>  
//Verbos => get, post, put, patch, options, headers, delete,...
//Aquitectura REST

app.get("/", function(req,res){
	/*res.send("Hola mundo");*/
    res.render('index');
});

app.post("/", function(req,res){
	res.render("form")
});



app.listen(8080);