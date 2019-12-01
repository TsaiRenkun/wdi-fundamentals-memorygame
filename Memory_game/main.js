alert('Hello, friends.')


var numCards;
const cards = ["queen","queen","king","king"];
const cardsInPlay = [];


function checkForMatch(){
if ((cardsInPlay[0]) === (cardsInPlay[1])) {
	alert("you found a match!");
	}	else{
			console.log("sorry try again");
	}
}

function flipCard(cardId){
	console.log("User flipped"  + " " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch(cardsInPlay);
}

flipCard(0);
flipCard(2);
