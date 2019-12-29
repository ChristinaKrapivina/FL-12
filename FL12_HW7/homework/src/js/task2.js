let wannaPlay;
let userGuess;
let number;
let prize;

wannaPlay = confirm('Do you want to play a game?');

if(wannaPlay == false) {
    alert('You did not become a billionaire, but can.');
} else {
// STEP 2 Start a game
    number = Math.floor(Math.random() * 9);
    let attempts = 3;
    prize = $0;
    let maxPrize = $100;
    var guessed = false;

    while (attempts > 0 && guessed == false) {
        userGuess = parseInt(prompt('Choose a rouletter pocket number from 0 to 8 \nattemptss left: ' + attempts + '\nTotal prize: ' + prize + '\nPossible prize on current attempts: ' + maxPrize, ''));

        if(userGuess === null) {
            break;
        } else if(userGuess === number) {
            guessed = true;

            if(attempts === 3) {
                prize = maxPrize;
            } else if(attempts === 2) {
                prize = maxPrize / 2;
            } else {
                prize = maxPrize / 4;
            }
        }
        attempts --;
    }
    if(guessed) {
        var proceed = confirm('Congratulation, you won! \nYour prize is: ' + prize + '. Do you want to continue?');
        if (proceed) {
            continue;
        } else {
            break;
        }
    } 
    
        alert('Thank you for your participation. Your prize is' + prize);
        wannaPlay = confirm('Do you want to play a game?');
    
}