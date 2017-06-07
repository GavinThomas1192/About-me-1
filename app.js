'use strict';

var que1 = prompt('What is your name' );
alert('Welcome to my web  page ' + que1);
console.log('User name is ' + que1);

var que2 = prompt(que1 + ' Are you reday to go on this journey').toUpperCase();
if (que2 === 'YES') {
  alert('Let"s start this journey' );
} else {
  alert('Come back when you are ready');
}
console.log(que1 + 'Said' + que2 + ' to the game');

var que3 = prompt( 'Lets get personal Do u think I am a dog or a cat person?').toUpperCase();
if (que3 === 'DOG') { alert('Correct I love Dogs');
}
else { alert('I am Algeric to Cats' );}
console.log(que1 + ' Thinks that i am a ' + que3 + 'person');

var que4 = prompt('Can you Guess my Age');
if (que4 > 31) { alert('You are too kind but I am 32 years Old');
}
else { alert('Good guess but I am not that old');}
