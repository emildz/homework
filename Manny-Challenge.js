// Set the value of 3  variables to different parts of a sentence and concatenate them to create one complete sentence with proper spacing.

let firstName = "Emil";
let city = "Delray Beach";
let school = "Boca Code";

console.log(
  "I am " + firstName + " , I live in " + city + " and I attend " + school + "."
);

// Write a function that takes in the number of two pointers and three pointers your basketball team made and calculates the total points scored. Console log the total points scored when your team scores 25 2's and 15 3's, 20 2's and and 20 3's.

function totalPointsScored(numberOfTwos, numberOfThrees) {
  return numberOfTwos * 2 + numberOfThrees * 3;
}

console.log(totalPointsScored(25, 15))
console.log(totalPointsScored(20, 20))
