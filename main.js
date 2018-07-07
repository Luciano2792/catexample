var fabricaDeGatos = function(patas, colorPelaje) {
	this.patas = patas;
	this.colorPelaje = colorPelaje;
	this.hablar = function () {
		alert("miauuu... miauuuu");
	}
}


// Felix el gato
var felix = new fabricaDeGatos(2, '#000');
felix.hablar = function(){
	alert('Soy Felix');
}
felix.hablar();

var garfield = new fabricaDeGatos(4, "#F37C22");

garfield.hablar();