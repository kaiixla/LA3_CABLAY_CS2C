//adding this prompt-sync to prompt the score
const ps = require("prompt-sync");
const prompt = ps();

//variable of a score where the user input its score
let score = prompt("Enter your score: ");

//using the if...else if...else application of Conditional Ternary Operator
score >= 97  ? console.log("Your equivalent grade is \"1.00\" Excellent \nFinal Remarks: HIGH PASS, Candidate for Cum Laude")
       :score >= 94 ? console.log("Your equivalent grade is \"1.25\" Excellent \nFinal Remarks: HIGH PASS, Candidate for Cum Laude")
       :score >= 91 ? console.log("Your equivalent grade is \"1.50\" Above Average \nFinal Remarks: HIGH PASS, Candidate for Cum Laude")
       :score == 90 ? console.log("Your equivalent grade is \"1.50\" Above Average \nFinal Remarks: HIGH PASS, Candidate for Cum Laude")
       :score >= 88 ? console.log("Your equivalent grade is \"1.75\" Above Average \nFinal Remarks: AVERAGE PASS")
       :score >= 85 ? console.log("Your equivalent grade is \"2.00\" Average \nFinal Remarks: AVERAGE PASS")
       :score >= 82 ? console.log("Your equivalen grade is \"2.25\" Average \nFinal Remarks: AVERAGE PASS")
       :score >= 80 ? console.log("Your equivalent grade is \"2.50\" Below Average \nFinal Remarks: AVERAGE PASS")
       :score == 79 ? console.log("Your equivalent grade is \"2.50\" Below Average \nFinal Remarks: LOW PASS")
       :score >= 76 ? console.log("Your equivalent grade is \"2.75\" Below Average \nFinal Remarks: LOW PASS")
       :score == 75 ? console.log("Your equivalent grade is \"3.00\" Below Average \nFinal Remarks:LOW PASS")
       :console.log("Your equivalent Grade is \"5.00\" Poor \nFinal Remarks: FAILED, Needs Improvemnt");