var socket = io.connect('http://localhost:8080');
socket.on('message', function(message) {
    alert('Le serveur a un message pour vous : ' + message);
})

 $('#poke').click(function () {
 	alert('poke');
                socket.emit('message', 'Salut serveur, ça va ?');
            })
