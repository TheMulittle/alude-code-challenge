import AludeStack from "./structures/AludeStack.js";

function main(a, b) {
  const stack = new AludeStack();

  let operation = "push";

  let stackSize = stack.size();
  let times = ammendStack(stack, 50000);
  profile(stackSize, times, operation);

  stackSize = stack.size();
  times = ammendStack(stack, 50000);
  profile(stackSize, times, operation);

  stackSize = stack.size();
  times = peekMinMultipleTimes(stack);
  profile(stackSize, times, "peekMin");

  operation = "pop";

  stackSize = stack.size();
  times = emptyStack(stack, 50000);
  profile(stackSize, times, operation);

  stackSize = stack.size();
  times = emptyStack(stack, 50000);
  profile(stackSize, times, operation);

  stackSize = stack.size();
  times = peekMinMultipleTimes(stack);
  profile(stackSize, times, "peekMin");
}

function ammendStack(stack, size) {
  let times = [];

  for (let i = 0; i < size; i++) {
    let randomFloat = Math.random();

    const mark = process.hrtime();
    stack.push(randomFloat);
    const [diffSeconds, diffNano] = process.hrtime(mark);

    times.push(diffNano);
  }
  return times;
}

function emptyStack(stack, size) {
  let times = [];

  for (let i = 0; i < size; i++) {
    const mark = process.hrtime();
    stack.pop();
    const [diffSeconds, diffNano] = process.hrtime(mark);

    times.push(diffNano);
  }
  return times;
}

function peekMinMultipleTimes(stack) {
  let times = [];

  let size = 1000;

  for (let i = 0; i < size; i++) {
    const mark = process.hrtime();
    stack.peekMinValue();
    const [diffSeconds, diffNano] = process.hrtime(mark);

    times.push(diffNano);
  }
  return times;
}

function profile(start, times, operation) {
  let avg = times.reduce((a, b) => a + b, 0) / times.length;
  let max = Math.max(...times);
  let min = Math.min(...times);
  let norm = console.log(`--------------------------------------------- `);
  console.log(
    `Operacao ${operation} ${times.length} vezes em uma stack que comeceu em ${start} posicoes - minimo tempo:  ${min} (ns): `
  );
  console.log(
    `Operacao ${operation} ${times.length} vezes em uma stack que comeceu em ${start} posicoes - media temporal: ${avg} (ns) `
  );
  console.log(
    `Operacao ${operation} ${times.length} vezes em uma stack que comeceu em ${start} posicoes - maxima temporal: ${max} (ns): `
  );
  console.log(`--------------------------------------------- `);
}

export default main();
