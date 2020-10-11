import Element from "./Element.js";

export default class DoubleLinkedList {
  constructor() {
    this.listSize = 0;
  }

  size() {
    return this.listSize;
  }

  /**
   * Adds an element at the last position of the DoubleLinkedList and increase its size. This operation is O(1) as the list
   * holds direct reference to the last element, therefore the list does not need to navigate its elements in order to find the last one
   * @param  valueToBeAdded the value to be stored in the list
   */
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
    this.listSize += 1;
  }

  /**
   * Removes an element at the last position of the DoubleLinkedList and returns the item stored in it. This operation is O(1) as the list
   * holds direct reference to the last element, therefore the list does not need to navigate its elements in order to find the last one.
   * If the list in empty, 'undefined' is returned
   * @return  the last item in the list
   */
  removeItemAtLastPosition() {
    if (this.listSize === 0) {
      return undefined;
    }

    const currentLastElement = this.lastElement;
    if (this.listSize === 1) {
      this.lastElement = undefined;
      this.firstElement = undefined;
    } else {
      this.lastElement = this.lastElement.getPreviousElement();
    }
    this.listSize -= 1;

    return currentLastElement.getValue();
  }

  /**
   * Transverses the list by 'index' elements and returns the Element in that position. If the index is out of bounds, returns 'undefined'
   * @param  index the position to find the Element in
   * @return  the N-th Element in the list or 'undefined'
   */
  getNthElement(index) {
    if (index >= this.listSize) {
      return undefined;
    }

    let currentElement = this.firstElement;
    for (let i = 0; i < index; i++) {
      currentElement = currentElement.getNextElement();
    }
    return currentElement;
  }

  /**
   * Transverses the list by 'index' elements and returns the item stored by the Element in that position. If the index is out of bounds, returns 'undefined'
   * @param  index the position to find the Item in
   * @return  the last item in the list or 'undefined'
   */
  getNthItem(index) {
    const element = this.getNthElement(index);
    return element === undefined ? undefined : element.getValue();
  }

  /**
   * Returns the last Element in the list. If the list is empty, returns 'undefined'. This operation is O(1) as the list
   * holds direct reference to the last element, therefore the list does not need to navigate its elements in order to find the last one.
   * @return  the last Element in the list or 'undefined'
   */
  getLastElement() {
    return this.lastElement;
  }

  /**
   * Returns the item stored in the last Element in the list. If the list is empty, returns 'undefined'
   * @return  the last item in the list or 'undefined'
   */
  getLastItem() {
    return this.getLastElement() ? this.getLastElement().getValue() : undefined;
  }
}
