import DoubleLinkedList from "../src/structures/DoubleLinkedList";

test("Uma DoubleLinkedList vazia e recem incializada deve ter tamanho 0", () => {
  const list = new DoubleLinkedList();
  expect(list.size()).toEqual(0);
});

test("Uma DoubleLinkedList vazia e recem incializada deve retornar undefined quando interrogado pelo ultimo item", () => {
  const list = new DoubleLinkedList();
  expect(list.getLastItem()).toBe(undefined);
});

test("Uma DoubleLinkedList após ser esvaziada deve retornar undefined quando interrogado pelo ultimo item", () => {
  const list = new DoubleLinkedList();
  list.addItemAtLastPosition(2.0);
  list.removeItemAtLastPosition();
  expect(list.getLastItem()).toBe(undefined);
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

test("Uma DoubleLinkedList deve retornar o n-esimo item", () => {
  const list = new DoubleLinkedList();
  list.addItemAtLastPosition(1.0);
  expect(list.getNthItem(0)).toEqual(1.0);
  list.addItemAtLastPosition(5.0);
  expect(list.getNthItem(1)).toEqual(5.0);
});

test("Uma DoubleLinkedList deve retornar undefined se o n-esimo item requerido nao faz parte da lista", () => {
  const list = new DoubleLinkedList();
  list.addItemAtLastPosition(1.0);
  list.addItemAtLastPosition(2.0);
  list.addItemAtLastPosition(5.0);
  expect(list.getNthItem(3)).toEqual(undefined);
  expect(list.getNthItem(5)).toEqual(undefined);
});

test("Uma DoubleLinkedList deve retornar undefined se o n-esimo item requerido nao faz parte da lista", () => {
  const list = new DoubleLinkedList();
  list.addItemAtLastPosition(1.0);
  list.addItemAtLastPosition(2.0);
  list.addItemAtLastPosition(5.0);
  expect(list.getNthItem(5)).toEqual(undefined);
});
