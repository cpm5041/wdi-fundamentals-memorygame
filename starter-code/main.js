console.log("JS file is connected to HTML! Woo!")
/*var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";*/
var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [ ];

var gameBoard = document.getElementById('game-board');

/*if (cardTwo === cardFour) {
	alert ('You found a match!');
}
else if (cardOne === cardThree) {
	alert ('You found a match!');
}
else {
	alert ('Sorry, try again');*/

var createCards = function () {
for (var i = 0; i < cards.length; i++){

	var cardElement = document.createElement('div');
		cardElement.className = 'card';
		gameBoard.appendChild(cardElement);

}
}
createCards();


/*7) Append each newly created card to the div with the ID game-board.

Create Functions to Organize Your Code

8) Create a function called createCards in your JavaScript file. This function
 will contain the code you just wrote to generate your cards.

9) Be sure to execute/fire your createCards function so it runs!

10) Once you've done that, your cards will be created! Be sure to check your page in a web browser to verify that everything works as intended.*/