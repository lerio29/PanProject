var express = require('express');
var path = require('path');
var cradle = require('cradle');

var app = express();
var server = app.listen(8080);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));


var connection = new(cradle.Connection)('http://localhost', 5984, {
      cache: true,
      raw: false,
      forceSave: true
  }
);

var db = connection.database('portfolio');
  
  //db.save('skywalker', {
      //force: 'light',
      //name: 'Luke Skywalker'
  //}, function (err, res) {
      //if (err) {
          //console.log('error', err);
      //} else {
          //console.log('success', 'success');
      //}
  //});
//db.exists(function (err, exists) {
	//if (err) {
		//console.log('error', err);
	//} else if (exists) {
			//console.log('the force is with you.');
			//db.get('portfolio', function (err, doc) {
			//console.log(doc);
		//});
	//} else {
		//console.log('database does not exists.');

	///* populate design documents */
	//}
//});


// Chargement de socket.io
var io = require('socket.io').listen(server);


function timeToDraw(socket){
  var counter = 0
  var interval = setInterval( function() {

    //TODO ajouter generation des coordonnees des points pour envoyer aux clients

    socket.emit('dessine', 'dessine!');
    counter++;
    console.log('nombre de passage : ' + counter);
     
  }, 100);

}



 





// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {

  console.log('Un client est connecté !');

  // socket.emit('message', 'Vous êtes bien connecté !');
  //on broadcast pour tout le monde
  socket.broadcast.emit('message', 'Un autre client vient de se connecter !');

  // Quand le serveur reçoit un signal de type "message" du client    
  socket.on('message', function (message) {
    console.log('Un client me parle ! Il me dit : ' + message);
  }); 

  // socket.on('dessine', function (dessine) {        
  //   socket.emit('dessine', 'dessine!');
  // }); 

  timeToDraw(socket);

});



app.get('/', function(req, res) {
     res.render('index.jade');
});

app.get('/boot', function(req, res) {
     res.render('boot.jade');
});

app.get('/sous-sol', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
});

app.get('/etage/1/chambre', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hé ho, c\'est privé ici !');
});


app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});


