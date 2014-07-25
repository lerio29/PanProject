var socket = io.connect('http://localhost:8080');
socket.on('message', function(message) {
    alert('Le serveur a un message pour vous : ' + message);
})

socket.on('dessine', function(message) {
    var carre = new RandomCarre('beerCanva');
	carre.dessineCarre();
})

 $('#poke').click(function () { 	
                socket.emit('message', 'Salut serveur, ça va ?');
            })
