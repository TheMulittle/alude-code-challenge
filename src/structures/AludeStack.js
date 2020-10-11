import Stack from "./Stack.js";

export default class AludeStack {
  constructor() {
    this.mainStack = new Stack();
    this.minStack = new Stack();
  }

  /**
   * Adds a value onto the top of the AludeStack
   * @param  valueToBeAdded the value to be stored in the stack
   */
  push(valueToBeAdded) {
    this.mainStack.push(valueToBeAdded);

    const currentMin = this.minStack.peek();
    if (currentMin === undefined || valueToBeAdded <= currentMin) {
      this.minStack.push(valueToBeAdded);
    }
  }

  /**
   * Removes the value sitting at the top of the stack. If the stack is empty, it will return 'undefined'. This operation is O(1) since the Stack#pop operation
   * is also O(1) as well
   * @return the item at the top of the stack that was removed
   */
  pop() {
    const top = this.mainStack.pop();

    if (top == this.minStack.peek()) {
      this.minStack.pop();
    }

    return top;
  }

  /**
   * Returns the value sitting in the top of the stack without removing it. If the stack is empty, it will return 'undefined'. This operation is O(1) since the operation Stack#peek
   * O(1) as well
   * @return the value at the top of the stack
   */
  peek() {
    return this.mainStack.peek();
  }

  /**
   * Returns the min value stored in the stack. If the stack is empty, it will return 'undefined'. This operation is O(1) since the operation Stack#peek
   * O(1) as well
   * @return min value in the stack
   */
  peekMinValue() {
    return this.minStack.peek();
  }

  /**
   * Returns the current number of values in the stack
   * @return stack size
   */
  size() {
    return this.mainStack.size();
  }
}
