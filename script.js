 const gameContainer = document.getElementById("game");
 let score = document.getElementById('score');

let cardsChosen = [];
let cardsChosenClass = [];
let cardsMatched = [];


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
// window.addEventListener('click', function(e) {
//   const clickedHere = e.target;
//   console.log(e)
//   console.log(clickedHere)
// })
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

//    <-- start check match -->   //
function checkMatch() {
  let cards = document.querySelectorAll('COLORS')
  const firstChoice = cardsChosenClass[0]
  const secondChoice = cardsChosenClass[1]
  if ( cardsChosen[0] === cardsChosen[1] ) {
    alert('Match found!')
    cardsMatched.push( cardsChosen )
  } else {
    alert('Try again!')
  }
  cardsChosen = [];
  cardsChosenClass = []
  score.textContent = cardsMatched.length
  if ( cardsMatched.length === COLORS.length / 2 ) {
    score.textContent = 'Congratulations, you win!'
  }
}
//    <-- end check match -->   //

//    <-- start click events -->   //

function handleCardClick(event) {
let cardDiv = div.classList('color')
cardsChosen.push(COLORS[cardDiv].name)
cardsChosenClass.push(cardDiv)
this.setAttribute('COLOR', COLORS[cardDiv].color )
if ( cardsChosen.length === 2 ) {
  setTimeout( checkMatch, 750 )
}
}
//    <-- end click events -->   //


// when the DOM loads
createDivsForColors(shuffledColors);
