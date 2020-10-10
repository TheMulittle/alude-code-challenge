import Stack from "./Stack.js";

export default class AludeStack {
  constructor() {
    this.mainStack = new Stack();
    this.minStack = new Stack();
  }

  push(valueToBeAdded) {
    this.mainStack.push(valueToBeAdded);

    const currentMin = this.minStack.peek();
    if (currentMin === undefined || valueToBeAdded <= currentMin) {
      this.minStack.push(valueToBeAdded);
    }
  }

  pop() {
    const top = this.mainStack.pop();

    if (top == this.minStack.peek()) {
      this.minStack.pop();
    }

    return top;
  }

  peek() {
    return this.mainStack.peek();
  }

  peekMinValue() {
    return this.minStack.peek();
  }

  size() {
    return this.mainStack.size();
  }
}
