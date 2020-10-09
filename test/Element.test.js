import Element from "../src/structures/Element";

test("Um Element deve poder ser inicializado apenas com seu valor e nenhum referencia aos objetos", () => {
  const element = new Element(5.5);
  expect(element).toEqual({
    value: 5.5,
    previousElement: undefined,
    nextElement: undefined,
  });
});

test("Um Element deve poder ser inicializado apenas com seu valor e a referencia para um Element anterior", () => {
  const firstElement = new Element(1.0);
  const secondElement = new Element(2.0, firstElement);
  expect(secondElement.getPreviousElement()).toBe(firstElement);
  expect(secondElement.getNextElement()).toEqual(undefined);
});

test("Um Element deve poder ser inicializado com valor e referencia para Element anterior e posterior", () => {
  const firstElement = new Element(1.0);
  const secondElement = new Element(2.0, firstElement, firstElement);
  expect(secondElement.getPreviousElement()).toBe(firstElement);
  expect(secondElement.getNextElement()).toEqual(firstElement);
});
