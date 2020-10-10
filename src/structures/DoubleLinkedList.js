import Element from "./Element.js";

export default class DoubleLinkedList {
  constructor() {
    this.listSize = 0;
  }

  size() {
    return this.listSize;
  }

  addItemAtLastPosition(item) {
    if (this.listSize === 0) {
      const element = new Element(item);
      this.firstElement = element;
      this.lastElement = element;
    } else {
      const currentLastElement = this.lastElement;
      const elementToBeAdded = new Element(item, currentLastElement);
      currentLastElement.setNextElement(elementToBeAdded);
      this.lastElement = elementToBeAdded;
    }
    this.listSize++;
  }

  removeItemAtLastPosition() {
    if (this.listSize === 0) {
      return null;
    }

    const currentLastElement = this.lastElement;
    if (this.listSize === 1) {
      this.lastElement = undefined;
      this.firstElement = undefined;
    } else {
      this.lastElement = this.lastElement.getPreviousElement();
    }
    this.listSize--;

    return currentLastElement.getValue();
  }

  getNthElement(index) {
    if (index >= this.listSize) {
      return null;
    }

    let currentElement = this.firstElement;
    for (let i = 0; i < index; i++) {
      currentElement = currentElement.getNextElement();
    }
    return currentElement;
  }

  getNthItem(index) {
    return this.getNthElement(index).getValue();
  }

  getLastElement() {
    return this.lastElement;
  }

  getLastItem() {
    return this.getLastElement() ? this.getLastElement().getValue() : undefined;
  }
}
