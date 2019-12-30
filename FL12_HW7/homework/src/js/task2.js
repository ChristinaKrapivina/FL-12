const zero = 0;
const one = 1;
const two = 2;
const three = 3;
const four = 4;
const nine = 9;
const hundred = 100;

let playGame;
let userGuess;
let randomNumber;

let currentPrize = zero;
let prevPrize = zero;
let maxPrize = hundred;
let attempts = three;
let numberRange = nine;
let guessed = false;



playGame = confirm('Do you want to play a game?');

if(playGame === false) {
    alert('You did not become a billionaire, but can.');
} else {
    while(playGame !== false) {
        randomNumber = Math.floor(Math.random() * numberRange);

        while (attempts > zero && guessed === false) {
            userGuess = parseInt(prompt(`Choose a rouletter pocket number from 0 to ${numberRange - one}\n
            Attempts left: ${attempts}\n 
            Total prize: $${prevPrize}\n
            Possible prize on current attempt: $${maxPrize}`));

            if(userGuess === randomNumber) {
                guessed = true;
                currentPrize = maxPrize;
                playGame = confirm(`Congratulation, you won!\n
                Your prize is: $${currentPrize}\n
                Do you want to continue?`);
            }
            maxPrize / two;
            attempts--;
        }

        if(!guessed || playGame === false){
            alert(`Thank you for your participation. Your prize is $${currentPrize + prevPrize}`);
            playGame = confirm('Do you want to play again?');
        }
        if (playGame) {
            if(guessed) {
                guessed = false;
                maxPrize = maxPrize * two;
                numberRange = numberRange + four;
            }
            prevPrize = currentPrize + prevPrize;
            currentPrize = zero;
            attempts = three;
        } 
    }
}