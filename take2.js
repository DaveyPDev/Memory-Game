const gameContainer = document.getElementById("game");
let score = document.getElementById('score');
let card1 = null;
let card2 = null;
let cardsFlipped = 0;
let noClicking = false;
let matchesFound = 0;

const COLORS = [
 "red",
 "blue",
 "green",
 "orange",
 "purple",
 "red",
 "blue",
 "green",
 "orange",
 "purple"
];

//    <-- start window onClick -->   //
document.addEventListener('click', function(e) {
  const clickedHere = e.target;
  console.log("LOG E", e)
  console.log('LOG E TARGET',e.target)
  console.log('DIR E'); console.dir(e)
  console.log('DIR E TARGET'); console.dir(e.target)
})
//    <-- end window onClick -->   //

//    <-- start shuffle -->   //
function shuffle(array) {
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
function createDivsForColors(colorArray) {
 for (let color of colorArray) {
   const newDiv = document.createElement("div");
   newDiv.classList.add(color);
   newDiv.addEventListener("click", handleCardClick);
   gameContainer.append(newDiv);
 }
}
//    <-- end color div's -->   //

//    <-- start click events -->   //

function handleCardClick(e) {

let chosenCard = e.target;
chosenCard.style.backgroundColor = chosenCard.classList[0];
let card1 = chosenCard;

if (!card1) {
  card1 = chosenCard;
} else {
 card2 = chosenCard;
}

if ( card1 === card2) {
  return 'match'
} else {
  return 'not match'
}


// }
//    <-- end click events -->   //

//    <-- start check match -->   //
// function checkMatch() {
 
}
//    <-- end check match -->   //

// when the DOM loads
createDivsForColors(shuffledColors);
