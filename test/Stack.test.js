import Stack from "../src/structures/Stack";

test("Uma Stack vazia nao deveria ter seu tamanho diminuido", () => {
  const stack = new Stack();
  expect(stack.pop()).toBe(null);
  expect(stack.size()).toBe(0);
});

test("Uma Stack deve permitir adicionar items", () => {
  const stack = new Stack();
  stack.push(5.0);
  expect(stack.size()).toBe(1);
});

test("Uma Stack deve ser LIFO", () => {
  const stack = new Stack();
  stack.push(5.0);
  stack.push(10.0);
  expect(stack.pop()).toBe(10.0);
  expect(stack.pop()).toBe(5.0);
});

test("Uma Stack deve permitir olhar o item do topo sem removê-lo", () => {
  const stack = new Stack();
  expect(stack.size()).toEqual(0);
  stack.push(17.0);
  expect(stack.peek()).toEqual(17.0);
  expect(stack.size()).toEqual(1);
});

test("Uma Stack deve permitir adicionar novos itens depois de esvazia-la", () => {
  const stack = new Stack();
  stack.push(21.0);
  stack.push(22.0);
  stack.pop();
  stack.pop();
  stack.push(23.0);
  expect(stack.peek()).toEqual(23.0);
  expect(stack.size()).toEqual(1);
});
