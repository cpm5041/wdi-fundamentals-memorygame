console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [ ];
//var gameBoard = document.getElementById('game-board');

/*if (cardTwo === cardFour) {
	alert ('You found a match!');
}
else if (cardOne === cardThree) {
	alert ('You found a match!');
}
else {
	alert ('Sorry, try again');*/

/*var createCards = function () {
for (var i = 0; i < cards.length; i++){

	var cardElement = document.createElement('div');
		cardElement.className = 'card';
		gameBoard.appendChild(cardElement);

	}
}

var createBoard = function () {
for (var i = 0; i < cards.length; i++){

	}
}*/
// find the board and set it to a variable
// so that we can add cards to it
var board = document.getElementById('game-board');
function createBoard() {
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);

    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }

}
function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
	}
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}
createBoard();


