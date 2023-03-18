// //Return Negative----------------------------------------------
// //-------------------------------------------------------------//

// /*make it negative.
// But maybe the number is already negative?*/

// function makeNegative(num) {
//   if (num === 0) {
//     return 0;
//   } else {
//     return -Math.abs(num);
//   }
// }

// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12

// /*
//     //---in kurzz
//     const makeNegative = (num) => -Math.abs(num)
//     //-----in kurz
//     function makeNegative(num) {
//       return num > 0 ? -num : num;
//     }
//     */

// //Opposite Number----------------------------------------------
// //-------------------------------------------------------------//

// /*simple, given an integer or a floating-point number, find its
// opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34
// */

// function opposite(number) {
//   return number * -1;
// }

// function opposite2(number) {
//   return -number;
// }

// //Reversed Strings ----------------------------------------------
// //-------------------------------------------------------------//

// /*Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'*/

// function solution(str) {
//   let splitString = str.split(""); // "world".split(); // ["w","o","r","l","d" ]
//   let reverseString = splitString.reverse(); // hello -> olleh
//   //console.log(reverseString);
//   let stringArray = reverseString.join(""); // aus Array wird ein String
//   return stringArray;
// }

// solution("world");

// //--Stone,scissors,rock,spock.---------------------

// function rpsls(pl1, pl2) {
//   //Your Magnificent Code here

//   switch (pl1 + pl2) {
//     case "rocklizard":
//     case "paperrock":
//     case "scissorslizard":
//     case "lizardpaper":
//     case "spockrock":
//       console.log("Player 1 Won!");
//       break;
//     case "lizardscissors":
//     case "spocklizard":
//     case "paperlizard":
//     case "scissorsspock":
//     case "rockspock":
//       console.log("Player 2 Won!");
//       break;
//     default:
//       console.log("Draw!");
//       break;
//   }
// }

// rpsls("rock", "lizard");
// rpsls("paper", "rock");
// rpsls("scissors", "lizard");
// rpsls("lizard", "paper");
// rpsls("spock", "rock");

// rpsls("lizard", "scissors");
// rpsls("spock", "lizard");
// rpsls("paper", "lizard");
// rpsls("scissors", "spock");
// rpsls("rock", "spock");

// rpsls("rock", "rock");
// rpsls("spock", "spock");

// //andere möglichkeit

// function rpsls(pl1, pl2) {
//   if (pl1 === pl2) return "Draw!";
//   let rules = {
//     paper: ["rock", "spock"],
//     rock: ["lizard", "scissors"],
//     lizard: ["spock", "paper"],
//     spock: ["scissors", "rock"],
//     scissors: ["lizard", "paper"],
//   };
//   if (rules[pl1].includes(pl2)) return "Player 1 Won!";
//   else return "Player 2 Won!";
// }

// //Are You Playing Banjo? --- .at -----

// function areYouPlayingBanjo(name) {
//   // Implement me
//   let index = 0;

//   if (name.at(index) === "R") {
//     return name + " plays banjo";
//   } else if (name.at(index) === "r") {
//     return name + " plays banjo";
//   } else {
//     return name + " does not play banjo";
//   }
// }

// areYouPlayingBanjo("Ringo");
// areYouPlayingBanjo("ralf");
// areYouPlayingBanjo("Paul");
// areYouPlayingBanjo("Anja");

// // ander eversion

// function areYouPlayingBanjo(name) {
//   if (name[0].toLowerCase() === "r") {
//     return name + " plays banjo";
//   } else {
//     return name + " does not play banjo";
//   }
// }

// //------------------

// function areYouPlayingBanjo(name) {
//   // Implement me
//   if (name[0] == "R" || name[0] == "r") return name + " plays banjo";
//   else return name + " does not play banjo";
// }
// //----------------------------------------------------

// /*
// Sie erhalten eine Liste (oder ein Array) von Integer-Paaren. Die Elemente jedes Paares stellen die Anzahl der Personen dar,
// die in den Bus einsteigen (das erste Element)
// und die Anzahl der Personen, die an einer Bushaltestelle aus dem Bus aussteigen (das zweite Element).

// Ihre Aufgabe ist es, die Anzahl der Personen zurückzugeben, die sich nach der letzten Bushaltestelle (nach dem letzten Array)
// noch im Bus befinden. Obwohl es die letzte Bushaltestelle ist,
// ist der Bus vielleicht nicht leer und einige Leute könnten noch im Bus sitzen, sie schlafen wahrscheinlich dort :D

// Bitte beachten Sie, dass die Testfälle sicherstellen, dass die Anzahl der Personen im Bus immer >= 0 ist. Die zurückgegebene Ganzzahl kann also nicht negativ sein.

// Der zweite Wert im ersten Paar im Array ist 0, da der Bus an der ersten Bushaltestelle leer ist. */

// var number = function (busStops) {
//   // Good Luck!
//   //let countPassengers = 0;
//   //let countLeavers = 0;

//   let passengers = 0;

//   //console.log(count);

//   for (i = 0; i < busStops.length; i++) {
//     passengers += busStops[i][0];
//     passengers -= busStops[i][1];
//   }

//   return passengers;
// };

// //----------------------------------------------------------
// /* andere Functionsweise
// function busStops(arr) {
//   let getInto = 0;
//   let getOff = 0;
//   arr.forEach((i) => {
//     getInto += i[0];
//     getOff += i[1];
//   });
//   return getInto - getOff;
// }
// busStops([
//   [10, 0],
//   [0, 2],
// ]); // 8
// busStops([
//   [4, 0],
//   [2, 1],
//   [1, 3],
//   [0, 2],
// ]); // 1

// */
// ///--------------------------------------------------------//

// //----remove string spaces --------/////

// //Simple, remove the spaces from the string, then return the resultant string.

// function noSpace(x) {
//   const remove = x.replaceAll(" ", ""); // erstes Statement gitb an was entfernt werdensoll, 2. in was
//   return remove;
// }

// noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"); // '8j8mBliB8gimjB8B8jlB'
// noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"); // '88Bifk8hB8BB8BBBB888chl8BhBfd'
// noSpace("8aaaaa dddd r     "); //'8aaaaaddddr'

// // andere schreibweise
// /*
// function noSpace(x){return x.split(' ').join('')}
// */
// /*
// const noSpace = x => x.replace(/ /g, "");
// */
// //----------------------------------------------------------------------//
// //-----------------------------------------------------------------------//

// //Reversed sequence----//

// /*
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// */

// const reverseSeq = (n) => {
//   let reverse = []; // adding empty array

//   for (let i = n; i > 0; i--) {
//     // n=0 , start by N to 1 , zieht die größeren Numbers ab
//     reverse.push(i); // fügr die klienen numbers dem array
//   }
//   return reverse;
// };

// //-----------------------------------------//
// //---------------------------------------------//

// //Convert boolean values to strings 'Yes' or 'No'.
// //Complete the method that takes
// //a boolean value and return a "Yes" string for true, or a "No" string for false.

// function boolToWord(bool) {
//   //...
//   if (bool === true) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// }

// boolToWord(true);
// boolToWord(false);

// /* function boolToWord( bool ){
//   return bool ? 'Yes':'No';
// }
// */

// //---------------------------------------------------------------------------------//

function isSkate(element) {
  if (element === "Skateboard" || element === "Surfboard") {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}
isSkate = ["Skatebord", "Inline-Skates", "Surfboard", "Snakeboard"];
