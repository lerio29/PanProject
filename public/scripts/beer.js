
var beerCanva = document.getElementById("beerCanva");
var context = beerCanva.getContext("2d");
  

// Fond
// context.fillStyle = "olivedrab";
// context.fillRect(10,10,250,250);

// Bouche
// context.fillStyle = "pink";
// context.fillRect(100,200,150,50);

// Yeux
// context.fillStyle = "powderblue";
// context.fillRect(100,100,50,50);
// context.fillRect(200,100,50,50);


var imageBeer = new Image(); 
imageBeer.src = '/images/small_beer.jpg';
imageBeer.onload = function() {
  // Cette fonction est appelée lorsque l'image a été chargée
  context.drawImage(this,150,197); // this fait référence à l'objet courant (=image)
};

