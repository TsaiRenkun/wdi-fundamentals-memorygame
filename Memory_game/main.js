alert('Hello, friends.')


var numCards;
const cards = [
{	
		rank:'queen',
		suit: 'hearts',
		cardImage: "images/queen-of-hearts.png"
	},
{	
		rank:'queen',
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png"
	},
{	
		rank:'king',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png"
	},
{	
		rank:'king',
		suit: 'diamonds',
		cardImage: "images/king-of-diamonds.png"
	}

];
const cardsInPlay = [];


function checkForMatch(){

if ((cardsInPlay[0]) === (cardsInPlay[1])) {
	alert("you found a match!");
	}	else{
			alert("sorry try again");
	}
}

function flipCard(){
	this.getAttribute(cards[cardId]);
	console.log("User flipped"  + " " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	this.getAttribute(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch(cardsInPlay);

}
function createBoard(){
	for(var i = 0; i < cards.length; i++){
		const cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		document.getElementsByTagName('img')[0].addEventListener('click', cardElement);
		document.getElementsById('game-board')[0].appendChild(cardElement);

	}
}

createBoard();

