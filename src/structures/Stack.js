import DoubleLinkedList from "./DoubleLinkedList.js";

export default class Stack {
  constructor() {
    this.list = new DoubleLinkedList();
  }

  push(item) {
    this.list.addItemAtLastPosition(item);
  }

  pop() {
    return this.list.removeItemAtLastPosition();
  }

  peek() {
    return this.list.getLastItem();
  }

  size() {
    return this.list.size();
  }
}
