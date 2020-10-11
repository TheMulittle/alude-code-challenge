import AludeStack from "./structures/AludeStack.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
let Benchmarkify = require("benchmarkify");

function main() {
  const emptyStack = new AludeStack();
  const numValuesEmptyStack = 10;
  ammendStack(emptyStack, numValuesEmptyStack);

  const fullStack = new AludeStack();
  const numValuesFullStack = 100000;
  ammendStack(fullStack, numValuesFullStack);

  let benchmark = new Benchmarkify("AludeStack benchmark").printHeader();

  let pushSuite = createBenchMarkSuite(
    benchmark,
    "Push",
    emptyStack,
    fullStack
  );

  let peekMinSuite = createBenchMarkSuite(
    benchmark,
    "PeekMin",
    emptyStack,
    fullStack
  );

  let popSuite = createBenchMarkSuite(
    benchmark, 
    "Pop", 
    emptyStack, 
    fullStack
  );

  benchmark.run([pushSuite, peekMinSuite, popSuite]);
}

function createBenchMarkSuite(benchmark, operation, emptyStack, fullStack) {
  const suite = benchmark.createSuite(`Benchmark Operacao ${operation}`, {
    minSamples: 20,
  });

  suite.ref(`${operation} em AludeStack com ${emptyStack.size()} itens`, () => {
    emptyStack.pop();
  });

  suite.add(`${operation} em AludeStack com ${fullStack.size()} itens`, () => {
    fullStack.pop();
  });

  return suite;
}

function ammendStack(stack, size) {
  for (let i = 0; i < size; i++) {
    const randomFloat = Math.random();
    stack.push(randomFloat);
  }
}

export default main();
