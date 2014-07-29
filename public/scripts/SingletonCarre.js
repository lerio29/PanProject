var SingletonCarre = (function() {

	var instance = null;

	var singletonCarreConstructor = function() {

		this.dessineCarre = function(idCanva) {
			console.log('on rentre bien dans la fonction dessineCarre de RandomCarre : '+idCanva);



			var beerCanva = document.getElementById(idCanva);
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

		var methodePrivate = function() {

			
		}

		var prop1, prop2;
	}



	

	return new function() {
		this.getInstance = function() {
			if (instance == null) {
				instance = new singletonCarreConstructor();

			}

			return instance;
		}
	}

})();