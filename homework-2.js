// HW - winter cohort: week 1 day 2
// Homework will help you practice loops, arrays, objects, and functions.

// 1. Create a function that returns the number of true values there are in an array.

const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]


function returnTheNumber(arr){
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[1] === true){
            counter++
        }
    
    }
    return counter 
}



// 2. Write a function that receives a car object as an argument and outputs the car's make and model. 

let car = {
    make: "Audi",
    model: "A8L"

}
function myCar(car){
console.log(car.make, car.model)
}
myCar(car)

// 3. Write a function to get the first element in an array

let cars = ['audi', 'bmw', 'nissan']

function getFirstElement(){
    console.log(cars[0])
}
getFirstElement()

