import DoubleLinkedList from "../src/structures/DoubleLinkedList";

test("Uma DoubleLinkedList vazia e recem incializada deve ter tamanho 0", () => {
  const list = new DoubleLinkedList();
  expect(list.size()).toEqual(0);
});

test("Uma DoubleLinkedList deve permitir adicionar valores", () => {
  const list = new DoubleLinkedList();
  list.addItemAtLastPosition(2.0);
  list.addItemAtLastPosition(5.0);
  expect(list.size()).toEqual(2);
  expect(list.getLastItem()).toBe(5.0);
});

test("Deve ser possível remover todos os itens de uma DoubleLinkedList", () => {
  const list = new DoubleLinkedList();
  list.addItemAtLastPosition(1);
  list.removeItemAtLastPosition();
  expect(list.size()).toEqual(0);
});

test("Tentar remover itens de uma DoubleLinkedList vazia nao deve deixar seu tamanho negativo", () => {
  const list = new DoubleLinkedList();
  list.removeItemAtLastPosition();
  expect(list.size()).toEqual(0);
});
