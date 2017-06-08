'use strict';
/* Question1*/
var que1 = prompt('What is your name' );
alert('Greetings ' + que1);
console.log('User name is ' + que1);

/* Question2*/
var que2 = confirm(que1 + ' Are you reday to learn more About Me');
if (que2 == true) {
  alert('Sweet!!! Lets Go' );
}
if (que2 == false) {
  alert('Come back when you are ready');
}
console.log(que1 + 'Said' + que2 + ' to the game');

/*Question3*/
var que3 = prompt( 'Guess if i like Cats or Dogs?').toUpperCase();
if (que3 === 'DOGS') { alert('LOVE DOGS I have 2 of them');
}
else if(que3 == 'CATS') { alert ('Like Cats but not as much as Dogs');
}
else {alert('That was not the Question');
}
console.log(que1 + ' guessed i like ' + que3);

/*Question5*/
var que5 = prompt('Can you Guess my Age');
if (que5 > 31) { alert('You are too kind but I am 32 years Old');
}
else if (que5 = 32){alert('Very good Guess Yes i am 32 yrs old');}
else { alert('Good guess but I am not that old');}
console.log(que1 + ' Guessed my age ' + que5 + 'years but I am 32 years old');

/*Question6*/
var que6 = prompt('Did I Ever join The U.S.Militry').toUpperCase();
if (que6 === 'YES'){alert('Yes i served in U.S.NAVY');}
else {alert('Wrong I served in U.S.Navy');}

/*Question7*/
var que7 = prompt('Guess how many countrys i have been. U only have 3 trys');
if (que7 === 12) {alert('Dam you are Good thats a right answer');}
else if (que7 > 12) {alert('Guess again but lower');}
else{alert('Guess again but higher');}

/*Question8 guessing random number*/
var randomNumber = Math.floor(Math.random() * 10 + 1);
var guessesLeft = 4;
while (guessesLeft > 0) {
  var que8 = prompt('Guess a number between 1 and 10. You have 4 guesses.');
  if (parseInt(que8) === randomNumber) {
    alert('You are correct!');
    guessesLeft = 0;
  } else {
    alert('Wrong! Try Again! You have ' + guessesLeft + ' guesses left.');
    guessesLeft--;
  }
}
console.log('The random numer was ' + randomNumber + '.');

// Question9 guessing from an array
var sportsIPlay = ['baseball', 'soccer', 'cricket'];
var choicesLeft = 6;
var isRight = false;
while (choicesLeft > 0) {
  var que9 = prompt('I play many sports. Can you guess just one? You have 7 guesses.');
  for (var i = 0; i < sportsIPlay.length; i++) {
    if (sportsIPlay[i] === que9.toLowerCase()) {
      alert('Wow you guessed right!');
      choicesLeft = -1;
      isRight = true;
    }
  }
  if (isRight === false) {
    alert('Nope! Guess again, you have ' + choicesLeft + ' choices left.');
    choicesLeft--;
  }
}
