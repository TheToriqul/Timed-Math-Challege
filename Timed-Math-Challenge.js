const readline = require("readline");

const OPERATORS = ["+", "-", "*"];
const MIN_OPERAND = 4;
const MAX_OPERAND = 5;
const TOTAL_PROBLEMS = 5;

function generateProblem() {
  const left =
    Math.floor(Math.random() * (MAX_OPERAND - MIN_OPERAND + 1)) + MIN_OPERAND;
  const right =
    Math.floor(Math.random() * (MAX_OPERAND - MIN_OPERAND + 1)) + MIN_OPERAND;
  const operator = OPERATORS[Math.floor(Math.random() * OPERATORS.length)];
  const expr = `${left} ${operator} ${right}`;
  const answer = eval(expr);
  return { expr, answer };
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let wrong = 0;
console.log("Press any key to start");
rl.question("", (start) => {
  console.log("--------------------------------");
  const startTime = Date.now();

  let i = 0;
  function askQuestion() {
    if (i < TOTAL_PROBLEMS) {
      const { expr, answer } = generateProblem();
      rl.question(`Problem #${i + 1}: ${expr} = `, (guess) => {
        if (guess === answer.toString()) {
          i++;
          askQuestion();
        } else {
          wrong++;
          askQuestion();
        }
      });
    } else {
      const endTime = Date.now();
      const totalTime = ((endTime - startTime) / 1000).toFixed(2);

      console.log("--------------------------------");
      console.log(`Nice Work! You finished in ${totalTime} seconds!`);
      rl.close();
    }
  }

  askQuestion();
});
