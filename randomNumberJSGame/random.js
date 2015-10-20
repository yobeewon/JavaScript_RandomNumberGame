/* This is the random number game
We start with creating a var input1 and presenting a message to the user with prompt that will ask for a number to start with.
We then take the user input which is in string format and use parseint to change it to a integer and put it in a var called bottomNumber.
Now we ask the user again for a new number and store it in the var input.
Here we take the user input again and change it from string to integer with the parseint.
Now we create a var called random number where we store our math formula answer, the math problem will generate a random number between the 2 numbers the user
preseneted and never go beyound or below the chosen numbers. The Math.floor(Math.random() * topNumber) + 1 will generate a number between 0 and up to but not 1
and will multiply it by the topNumber which was given by the user and then add 1 to it. The Math.floor will generate a number like 0.12847578 and then drops the number 
to the nearest integer.
*/
var input1 = prompt("Please type a starting number");
var bottomNumber = parseInt(input1);
var input = prompt("Choose a number");
var topNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".</p>";
document.write(message);