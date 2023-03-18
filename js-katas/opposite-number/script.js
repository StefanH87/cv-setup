/*simple, given an integer or a floating-point number, find its 
opposite.

Examples:

1: -1
14: -14
-34: 34
*/
/*
function opposite(number) {
  return number * -1;
}

function opposite2(number) {
  return -number;
}
*/
//--------------------------------------------------

function rpsls(pl1, pl2) {
  //Your Magnificent Code here

  switch (pl1 + pl2) {
    case "rocklizard":
    case "paperrock":
    case "scissorslizard":
    case "lizardpaper":
    case "spockrock":
      console.log("Player 1 Won!");
      break;
    case "lizardscissors":
    case "spocklizard":
    case "paperlizard":
    case "scissorsspock":
    case "rockspock":
      console.log("Player 2 Won!");
      break;
    default:
      console.log("Draw!");
      break;
  }
}

rpsls("rock", "lizard");
rpsls("paper", "rock");
rpsls("scissors", "lizard");
rpsls("lizard", "paper");
rpsls("spock", "rock");

rpsls("lizard", "scissors");
rpsls("spock", "lizard");
rpsls("paper", "lizard");
rpsls("scissors", "spock");
rpsls("rock", "spock");

rpsls("rock", "rock");
rpsls("spock", "spock");

//andere möglichkeit

function rpsls(pl1, pl2) {
  if (pl1 === pl2) return "Draw!";
  let rules = {
    paper: ["rock", "spock"],
    rock: ["lizard", "scissors"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
    scissors: ["lizard", "paper"],
  };
  if (rules[pl1].includes(pl2)) return "Player 1 Won!";
  else return "Player 2 Won!";
}

//www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

//Aufgabe

/*

Reversed Strings 

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/

https: function solution(str) {
  let splitString = str.split(""); // "world".split(); // ["w","o","r","l","d" ]
  let reverseString = splitString.reverse(); // hello -> olleh
  //console.log(reverseString);
  let stringArray = reverseString.join(""); // aus Array wird ein String
  return stringArray;
}

solution("world");
