$(document).ready(function(){

$("#linea").click(function(e){

	$("#agregacomentario").append('	<div class="comenta" id="comentario2"><input type="name" name="msje" id="agrega" placeholder="Agrega mensaje"><button class="btn btn-default" type="button" id="boton1"></a><i class="fa fa-microphone" aria-hidden="true" id="icono"></i></button>');

$("#boton1").click(function(e){
		agrega = $("#agrega").val();

	$("#guardar").append('<p class="imprime">'+agrega+'</p>');
	

	});

	});

$("#linea2").click(function(e){

	$("#agregacomentario1").append('	<div class="comenta" id="comentario2"><input type="name" name="msje" id="agrega" placeholder="Agrega mensaje"><button class="btn btn-default" type="button" id="boton1" id="boton2"></a><i class="fa fa-microphone" aria-hidden="true" id="icono"></i></button>');

$("#boton1").click(function(e){
		agrega = $("#agrega").val();

	$("#guardar1").append('<p class="imprime">'+agrega+'</p>');
	

	});

	});
});