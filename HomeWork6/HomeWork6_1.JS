let personA = 0;
let personB = 0;

function getRandomDice(min, max) {
    const diceResult = Math.round(Math.random() * (max - min) + min);
    return diceResult;
  };

let count = 0;
do {
  let dice = getRandomDice(1, 7);
  count++;
  personA += dice;
} while (count < 3);
console.log(personA)

count = 0;
do {
  let dice = getRandomDice(1, 7);
  count++;
  personB += dice;
} while (count < 3);
console.log(personB)

if(personA < personB) {
	console.log('personB is a winner')
} else if (personA > personB) {
	console.log('personA is a winner')
} else {
	console.log('draw');
}
