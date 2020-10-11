import AludeStack from "./structures/AludeStack.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
let Benchmarkify = require("benchmarkify");

const emptyStack = new AludeStack();
const numValuesEmptyStack = 10;
ammendStack(emptyStack, numValuesEmptyStack);

const fullStack = new AludeStack();
const numValuesFullStack = 100000;
ammendStack(fullStack, numValuesFullStack);

let benchmark = new Benchmarkify("AludeStack benchmark").printHeader();

let pushSuite = createBenchMarkSuite(benchmark, "Push");

let peekMinSuite = createBenchMarkSuite(benchmark, "PeekMin");

let popSuite = createBenchMarkSuite(benchmark, "Pop");

benchmark.run([pushSuite, peekMinSuite, popSuite]);

function createBenchMarkSuite(benchmark, operation) {
  const suite = benchmark.createSuite(`Benchmark Operacao ${operation}`, {
    minSamples: 20,
  });

  suite.ref(
    `${operation} em AludeStack com ${numValuesEmptyStack} itens`,
    () => {
      emptyStack.pop();
    }
  );

  suite.add(
    `${operation} em AludeStack com ${numValuesFullStack} itens`,
    () => {
      fullStack.pop();
    }
  );

  return suite;
}

function ammendStack(stack, size) {
  for (let i = 0; i < size; i++) {
    const randomFloat = Math.random();
    stack.push(randomFloat);
  }
}
