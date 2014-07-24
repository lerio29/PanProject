/**
*	Classe de generation de carré de couleur de façon hasardeuse dans un Canva HTML
*
*/




// Constructeur de la classe RandomCarre
function RandomCarre(idCanva){

	console.log('on rentre bien dans le constructeur de RandomCarre');
	this.idCanva = idCanva;


}

RandomCarre.prototype.dessineCarre = function() {
	console.log('on rentre bien dans la fonction dessineCarre de RandomCarre : '+this.idCanva);
	console.log('rgba(' + Math.floor((Math.random() * 256) + 1) + ', ' + Math.floor((Math.random() * 100) + 1) + ', 0, 0.3)');


//TODO mettre la declaration des var xxx dans le constructeur 
    var beerCanva = document.getElementById('#'+this.idCanva);
	var context = beerCanva.getContext("2d");



	//on genere les couleurs au hasard
	context.fillStyle =  'rgba(' + Math.floor((Math.random() * 256) + 1) + ', ' + Math.floor((Math.random() * 100) + 1) + ', 0, 0.3)';
	//on dessine les carrés au hasard dans une zone de 900*600 loins les 4 pixels de large des carrés
	context.fillRect(Math.floor((Math.random() * 900) -4),Math.floor((Math.random() * 900) -4),4,4);
}

 


