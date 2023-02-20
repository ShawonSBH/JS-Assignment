const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number ", (answer) => {
  if(answer > 0) {
    recursionPositive(answer);

  }
    else {

  }
  rl.close();
});



function recursionPositive(n) {
    console.log(n);
    if(n===0) return 0;
    recursionPositive(n-1);
}

function recursionNegative(n) {
    console.log(n);
    if(n===0) return 0;
    recursionNegative(n+1);
}