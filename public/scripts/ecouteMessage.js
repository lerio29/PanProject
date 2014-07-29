var socket = io.connect('http://localhost:8080');

socket.on('message', function(message) {
    alert('Le serveur a un message pour vous : ' + message);
})


//TODO ajouter parmateres pour recevoir les coordonnées du serveurs
socket.on('dessine', function(dessine) {

 //    var carre = new RandomCarre('beerCanva');
	// carre.dessineCarre();
	// delete carre;
	SingletonCarre.getInstance().dessineCarre('beerCanva');

	var date = new Date();
    var str = date.getHours();
    str += ':'+(date.getMinutes()<10?'0':'')+date.getMinutes();
    str += ':'+(date.getSeconds()<10?'0':'')+date.getSeconds();

    console.log('date : ' + str);


})

$('#poke').click(function () { 	
                socket.emit('message', 'Salut serveur, ça va ?');
                
})
