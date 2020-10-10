import AludeStack from "../src/structures/AludeStack";

test("Uma AludeStack deve retornar undefined para ambos os metodos peek e peekMinValue se estiver vazia", () => {
  const stack = new AludeStack();
  expect(stack.peek()).toBe(undefined);
  expect(stack.peekMinValue()).toBe(undefined);
});

test("O primeiro valor adicionado a uma AludeStack deve ser o menor valor", () => {
  const stack = new AludeStack();
  stack.push(5.0);
  expect(stack.peek()).toBe(5.0);
  expect(stack.peekMinValue()).toBe(5.0);
});

test("Toda vez que um valor menor for adicionado aa AludeStack, o valor mínimo tem que ser atualizado", () => {
  const stack = new AludeStack();
  stack.push(5.0);
  expect(stack.peek()).toBe(5.0);
  expect(stack.peekMinValue()).toBe(5.0);

  stack.push(2.0);
  expect(stack.peek()).toBe(2.0);
  expect(stack.peekMinValue()).toBe(2.0);

  stack.push(3.0);
  expect(stack.peek()).toBe(3.0);
  expect(stack.peekMinValue()).toBe(2.0);

  stack.push(-1.0);
  expect(stack.peek()).toBe(-1.0);
  expect(stack.peekMinValue()).toBe(-1.0);
});

test("Se o valor do topo a ser removido da AludeStack for tambem o minimo, o valor mínimo tem que ser atualizado", () => {
  const stack = new AludeStack();
  stack.push(2.0);
  stack.push(1.0);
  stack.push(5.0);
  stack.push(1.0);

  stack.pop();
  expect(stack.peek()).toBe(5.0);
  expect(stack.peekMinValue()).toBe(1.0);

  stack.pop();
  expect(stack.peek()).toBe(1.0);
  expect(stack.peekMinValue()).toBe(1.0);
  stack.pop();
  expect(stack.peek()).toBe(2.0);
  expect(stack.peekMinValue()).toBe(2.0);

  stack.pop();
  expect(stack.peek()).toBe(undefined);
  expect(stack.peekMinValue()).toBe(undefined);
});
