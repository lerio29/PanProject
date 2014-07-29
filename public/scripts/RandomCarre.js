/**
  *	Classe de generation de carré de couleur de façon hasardeuse dans un Canva HTML
  *
  */




// Constructeur de la classe RandomCarre
function RandomCarre(idCanva){

	console.log('on rentre bien dans le constructeur de RandomCarre');
	this.idCanva = idCanva;

}

//TODO ajouter parmateres pour recevoir les coordonnées du serveurs
RandomCarre.prototype.dessineCarre = function() {
	
	console.log('on rentre bien dans la fonction dessineCarre de RandomCarre : '+this.idCanva);
	


    var beerCanva = document.getElementById(this.idCanva);
	var context = beerCanva.getContext("2d");

	

	context.fillStyle = 'rgba(' + Math.floor((Math.random() * 256) + 1) 
		+ ', ' + Math.floor((Math.random() * 101) ) 
		+ ', ' + Math.floor((Math.random() * 101) )
		+ ', 0.6)';

	//on dessine les carrés au hasard dans une zone 
	var xCarre = Math.floor((Math.random() * 491) );
	var yCarre = Math.floor((Math.random() * 291) );
	var hCarre = 10;

	console.log('le tout : ' + xCarre + ',' + yCarre +',' + hCarre + ', '+ hCarre );
	context.fillRect( xCarre, yCarre , hCarre , hCarre );
	

	
}

 


