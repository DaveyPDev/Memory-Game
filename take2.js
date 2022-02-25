document.addEventListener('DOMContentLoaded', function() {
const gameContainer = document.getElementById('game');
let card1 = null;
let card2 = null;
let noClicking = false;
let matchesFound = 0;
let attempts = 0;
let cardsFlipped = 0;
let attemptDoc = document.getElementById('attempts');
let attemptCount = attemptDoc.textContent;
let matchDoc = document.getElementById('matches');
let matchCount = matchDoc.textContent;
let gameStart = null




const COLORS = [ 'red', 'blue', 'green', 'orange', 'purple', 'red', 'blue', 'green', 'orange', 'purple' ];

	//    <-- start window onClick -->   //
// document.addEventListener('click', function(e) {
//   const clickedHere = e.target;
//   console.log("LOG E", e)
//   console.log('LOG E TARGET',e.target)
//   console.log('DIR E'); console.dir(e)
//   console.log('DIR E TARGET'); console.dir(e.target)
// })
	//    <-- end window onClick -->   //

	//    <-- start shuffle -->   //
function shuffle (array) {
	let counter = array.length;
	while (counter > 0) {
		let index = Math.floor(Math.random() * counter);
		counter--;
		let temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}
	return array;
}

let shuffledColors = shuffle(COLORS);
	//    <-- end shuffle -->   //

	//    <-- start color div's -->   //
function createDivsForColors (colorArray) {
	for (let color of colorArray) {
		const newDiv = document.createElement('div');
		newDiv.classList.add(color);
		newDiv.addEventListener('click', handleCardClick);
		gameContainer.append(newDiv);
	}
}
	//    <-- end color div's -->   //

	//    <-- start game -->    //
	// ! add button to load game
	//    <-- end game -->    //

	//    <-- start click events -->   //
function handleCardClick (e) {
	if (noClicking) return;
	if (e.target.classList.contains('flipped')) return;

	let chosenCard = e.target;
	chosenCard.style.backgroundColor = chosenCard.classList[0];

	if (!card1 || !card2) {
		chosenCard.classList.add('flipped');
		card1 = card1 || chosenCard;
		card2 = chosenCard === card1 ? null : chosenCard;
		console.log(card1);
		console.log(card2);
	}

	if (card1 && card2) {
		noClicking = true;
		let cardFlipped1 = card1.className;
		let cardFlipped2 = card2.className;
		attempts++;
		attemptDoc.textContent = attempts;

		if (cardFlipped1 === cardFlipped2) {
			matchesFound++;
			matchDoc.textContent = matchesFound;
			console.log('found match');
			console.log(matchesFound);
			cardsFlipped += 2;
			card1.removeEventListener('click', handleCardClick);
			card2.removeEventListener('click', handleCardClick);
			card1 = null;
			card2 = null;
			noClicking = false;
		}
		else {
			setTimeout(function () {
				card1.classList.remove('flipped');
				card2.classList.remove('flipped');
				card1.style.backgroundColor = '';
				card2.style.backgroundColor = '';
				card1 = null;
				card2 = null;
				noClicking = false;
			}, 1250);
			
		}
	}
	if (cardsFlipped === COLORS.length) alert('You win!');
}
	//    <-- end check match -->   //

	// when the DOM loads
createDivsForColors(shuffledColors);
})