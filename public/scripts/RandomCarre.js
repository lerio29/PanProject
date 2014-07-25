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




    var beerCanva = document.getElementById(this.idCanva);
	var context = beerCanva.getContext("2d");
	


	

	context.fillStyle = 'rgba(' + Math.floor((Math.random() * 256) + 1) 
		+ ', ' + Math.floor((Math.random() * 101) ) 
		+ ', ' + Math.floor((Math.random() * 101) )
		+ ', 0.4)';

	//on dessine les carrés au hasard dans une zone de 900*600 loins les 4 pixels de large des carrés
	var xCarre = Math.floor((Math.random() * 291) );
	var yCarre = Math.floor((Math.random() * 291) );
	var hCarre = 10;
		console.log('le tout : ' + xCarre + ',' + xCarre +',10,10' );
	context.fillRect( xCarre, yCarre , hCarre , hCarre );
	

	
}

 


