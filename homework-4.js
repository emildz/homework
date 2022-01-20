//1. Write a loop that outputs (10,9,8,7,6,5,4,3,2,1 Blast Off)

let count = 10;
for (let i = 0; i < 10; i++) {
  console.log(count);
  count--;
  if (i === 9) {
    console.log("Blast Off");
  }
}

//1. create a function that takes an array of numbers & return both min and max in that order. (use a loop)
const array = [30, 29, 28, 27, 26];


function minAndMax(arr) {
  let min = Infinity
  let max = -Infinity

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    }
    if (arr[i] > max) {
        max = arr[i]
    }
  }console.log(min)
  console.log(max)
}

minAndMax(array)

//Converts a string to uppercase letters:
let str = "WHAT a TIME to BE ALIVE!"
let newStr = str.toUpperCase() 
 console.log(newStr)