'use strict'
var successes = 0
// This function will turn a y/yes/n/no into a uniform output regardless of capitalization or length of response, it also returns false if no yes/no/y/n is entered
function testingLogicnotforproduction{
function inputClean(input) {
  // This command takes the input and makes it lowercase
  input = input.toLowerCase();
  console.log("raw input is " + input)
  // this part will take a 'y' and convert it to a 'yes'
  if (input === 'y' || input === 'yes') {
  input = 'yes'
  console.log("standardized input is " + input)
  return input
  }
  // this line will turn a 'n' into a 'no'
  else if (input === 'n' || input === 'no') {
  input = 'no'
  console.log("standardized input is " + input)
  return input
  }
  // this is to check if they tried entering something besides y/yes/n/no
  else {
  input = false
  console.log("standardized input is " + input)
  return input
  };
 }

 // This is to define the question
function testQuestion() {
  // This creates a local variable (inside the function variable)
  var answer = prompt('y/yes/n/no are acceptable answers');
  // Returns the variable set above when the function is called 
  return answer;
  }

var testAnswer = testQuestion()
 // This would be the way you call the answer to assess if they got it right 
var cleanTestAnswer = inputClean(testAnswer);
 // This logs the groomed answer
//  console.log("standardized input is " + cleanTestAnswer);
// I commented this line out since i incorporated it into the input clean function
}

function question1(){
function quest1() {
  var answer1 = prompt('Do you think I have ever been in a fight? y/n/yes/no')
  return answer1;
}
var answer1 = quest1();
console.log(answer1 + " was user response");
answer1 = inputClean(answer1);
console.log(answer1 + " is cleaned user reponse");
while (answer1 === false){
  alert("please enter a yes or no");
  answer1 = question1();
  answer1 = inputClean(answer1);
  }
if (answer1 === 'yes')  { alert('CORRECT'), console.log('Correct'); successes++;}
  else alert('WRONG!'), console.log('wrong'); 
}       

  function question2() {
    var answer2 = prompt('Is my favorite movie fight club? y/n/yes/no?').toUpperCase();
    console.log(answer2);
      if (answer2 === 'Y') {
          answer2 = 'YES'
          };
      if (answer2 === 'N') {
          answer2 = 'NO'
          };
    console.log(answer2);
    if (answer2 === 'NO')  { alert('CORRECT'); console.log('Correct'); successes++;}
    else {alert('WRONG!'), console.log('wrong');}}


function question3(){
var answer3 = prompt('Am I closer to 50 than I am 20? y/n/yes/no?').toUpperCase();
  console.log(answer3);
    if (answer3 === 'Y') {
    answer3 = 'YES'
    };
    if (answer3 === 'N') {
    answer3 = 'NO'
    };
    console.log(answer3);
    if (answer3 === 'NO')  { alert('CORRECT'); console.log('Correct'); successes++;}
    else {alert('WRONG!'); console.log('wrong');}
  }

function question4(){
var answer4 = prompt('Did I graduate college in 2004?  y/n/yes/no').toUpperCase();
  console.log(answer4);
    if (answer4 === 'Y') {
    answer4 = 'YES'
    };
    if (answer4 === 'N') {
    answer4 = 'NO'
    };
  console.log(answer4);
  if (answer4 === 'NO')  { alert('CORRECT'); console.log('Correct');successes++;}
  else alert('WRONG!'), console.log('wrong');
  }

function question5(){
var answer5 = prompt('Do I have more than 1 tattoo? y/n/yes/no').toUpperCase();
  console.log(answer5);
    if (answer5 === 'Y') {
    answer5 = 'YES'
    };
    if (answer5 === 'N') {
    answer5 = 'NO'
    };
  console.log(answer5);
  if (answer5 === 'YES')  { alert('CORRECT'); console.log('Correct'); successes++;}
  else alert('WRONG!'), console.log('wrong');
  }

function question6(){
var answer6 = prompt('How old do you think I am? # format please')
  var i = 1;
  while (i < 5) {
  if (answer6 === '32') {
    alert('You got it, I\'m a young old man');
    console.log('answer #' + i + ' correct');
    successes++;
    break;
    }
  else if (answer6 < 32) {
    alert('Too low my friend but I appreciate the vote of confidence');
    console.log('answer #' + i + ' wrong');
    answer6 = prompt('Try again, how old am I? You were too low last time.')
    i++;
    }
  else if (answer6 > 32) {
    alert('You wound me to my core, too high');
    console.log('answer #' + i + ' wrong');
    answer6 = prompt('Try again, how old am I? You were too high \(jerk\) last time.')
    i++;
    }
  }
}

function question7(){ 
// This was made with the help of my new bff aileen :) YAY!
var list1 = [
  'pumpkin',
  'apple',
  'grape',
  'orange',
  'pear',
  'cucumber'
]
var veggies = prompt('Name one of my favorite plants...');
var newVeggies = [];
for (var guesses = 6; guesses > 0; guesses--){
  if (list1.indexOf(veggies)>=0){
    alert('Congrats, that\s correct. Here are the other answers ' + list1 + '.' + 
    ' And you even showed me a few new ones like ' + newVeggies);
    successes++;
    break;
  }
  else {
    newVeggies.push(veggies);
    var veggies = prompt('Not even close, try again.');
  }
}
}

var name = prompt("What is your name")

question1();
question2();
question3();
question4();
question5();
question6();
question7();
alert(" Congratulations " + name + " you got " + successes + "/7 questions correct");
