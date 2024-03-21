#!/user/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
  { message: "enter first Number", type: "number", name: "firstNumber" },
  { message: "enter second Number", type: "number", name: "secondNumber" },
  {
    message: "select on of the operators to perform operations",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);
console.log(answer);
//conditional statment
if (answer.operator==="addition"){console.log (answer.firstNumber+answer.secondNumber)}
else if (answer.operator==="subtraction"){console.log (answer.firstNumber-answer.secondNumber)}
if (answer.operator==="multiplication"){console.log (answer.firstNumber*answer.secondNumber)}
else if (answer.operator==="division"){console.log (answer.firstNumber/answer.secondNumber)}
