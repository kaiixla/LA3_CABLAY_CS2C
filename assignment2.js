//adding this prompt-sync to allow user input
const ps = require("prompt-sync");
const prompt = ps();

//variable for iterations
let counter1 = 0;
let counter2 = 0;

//prompt the user to enter the limit of the double loop
const maxLimit = parseInt(prompt("Enter the Limit of the Double Loop: "))

//displaying the result header
console.log("Result: ")

//use of double loop to print out the map iterations
for (let counter1 = 0; counter1 <= maxLimit; counter1++){
    for (let counter2 = 0; counter2 <= maxLimit; counter2++){

        //sum of the counter1 and counter2
        const addedValue = counter1 + counter2;

        //displaying the values and the sum
        console.log(`[${counter1}] [${counter2}]` + " Added value is " + addedValue);
    }
}