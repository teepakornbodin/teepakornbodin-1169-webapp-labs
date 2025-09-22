
const args = process.argv.slice(2);

if (args.length < 2) {
  console.log("Please enter two numbers");
  process.exit(1);
}

const num1 = Number(args[0]);
const num2 = Number(args[1]);

if (isNaN(num1) || isNaN(num2)) {
  console.log("Please enter two numbers");
  process.exit(1);
}

process.stdout.write("v add | subtract ");


process.stdin.setEncoding("utf8");
process.stdin.on("data", (input) => {
  const operator = input.trim(); //ลบช่องว่าง (space), tab, และ newline (\n)

  if (operator === "add") {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
  } else if (operator === "subtract") {
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
  } else {
    console.log("Unknown operator");
  }

  process.exit(0);
});

