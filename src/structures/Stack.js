import DoubleLinkedList from "./DoubleLinkedList.js";

export default class Stack {
  constructor() {
    this.list = new DoubleLinkedList();
  }

  /**
   * Adds an item onto the top of the stack
   * @param  the item to be added
   */
  push(item) {
    this.list.addItemAtLastPosition(item);
  }

  /**
   * Removes the item at the top of the stack. If the stack is empty, it returns 'undefined'. This operation is O(1) since the method DoubleLinkedList#removeItemAtLastPosition
   * is also O(1)
   * @return  top item
   */
  pop() {
    return this.list.removeItemAtLastPosition();
  }

  /**
   * Returns the item at the top of the stack without removing it. If the stack is empty, it returns 'undefined'. This operation is O(1) since the method DoubleLinkedList#getLastItem
   * is also O(1)
   * @return  top item value
   */
  peek() {
    return this.list.getLastItem();
  }

  /**
   * Returns the current size of the satck
   * @return  stack size
   */
  size() {
    return this.list.size();
  }
}
