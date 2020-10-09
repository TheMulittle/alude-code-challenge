export default class Element {
  constructor(value, previousElement = undefined, nextElement = undefined) {
    this.value = value;
    this.previousElement = previousElement;
    this.nextElement = nextElement;
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }

  getPreviousElement() {
    return this.previousElement;
  }

  setPreviousElement(previousElement) {
    this.previousElement = previousElement;
  }

  getNextElement() {
    return this.nextElement;
  }

  setNextElement(nextElement) {
    this.nextElement = nextElement;
  }
}
