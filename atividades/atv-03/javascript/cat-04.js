// @001 max3
let result;

const max3 = (a) => (b) => (c) => Math.max(a, b, c);

result = max3(3)(2)(6);
result;

// @007 somaImpares

const somaImpares = (xs) =>
  xs.filter((x) => x % 2 != 0).reduce((soma = 0, x) => soma + x);

result = somaImpares([1, 2, 3]);
result;

// @009 sublist

const sublist = (inicio) => (fim) => (xs) =>
  xs.filter(
    (elem, index) =>
      index >= (inicio < 0 ? inicio + xs.length : inicio) &&
      index < (fim < 0 ? fim + xs.length : fim) &&
      elem
  );

result = sublist(-10)(-1)([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
result;

// @012 fatorial

const fatorial = (n) => (n < 2 ? 1 : n * fatorial(n - 1));

result = fatorial(6);
result;

// @014 elemento

const elemento = (index) => (xs) => {
  index = index < 0 ? index + xs.length : index;

  if (index == 0) return xs[0];

  return elemento(index - 1)(xs.slice(1));
};

result = elemento(1)([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

result;

// @015 pertence

// Opção 1
// const pertence = (n) => (xs) => xs.includes(n);

// Opção 2
// const pertence = (n) => (xs) => !(!xs.filter(elem => elem == n).length)

// Opção 3
const pertence = (n) => (xs) => {
  if (xs.length === 0) return false;
  if (xs[0] === n) return true;

  return pertence(n)(xs.slice(1));
};

result = pertence(1)([0, 1, 1, 1, 4, 5, 6, 7, 8, 9, 10]);

result;

//@016 total

// Opção 1 - com map e reduce
// const total = (xs) =>
//   xs.map((_) => 1).reduce((tamanho, elem) => tamanho + elem, 0);

// Opção 2 - recursão
// const total = (xs) => {
//   if (xs.length == 0) return 0;
//   return 1 + total(xs.slice(1));
// };

// Opção 3 - apenas com reduce (fold)
const total = (xs) => xs.reduce((tamanho) => tamanho + 1, 0);

result = total([0, 1, 1, 1, 4, 5, 6, 7, 8, 9, 10]);
result;

// @017 maior

const maior = (xs) => {
  let head = xs[0];

  if (xs.length == 1) return head;

  let resto = maior(xs.slice(1));

  return head > resto ? head : resto;
};

result = maior([0, 1, 1, 1, 4, 5, 6, 7, 2, 9, 10]);
result;

// @023 corpo

const corpo = (xs) => xs.slice(1);

// @028 divide

const divide = (xs) => (split) => {
  return [xs.slice(0, split), xs.slice(split + 1)];
};

result = divide([0, 1, 1, 1, 4, 5, 6, 7, 2, 9, 10])(5);
result;

// @030 união

const uniao = (xs) => (ys) =>
  xs.concat(ys.filter((elem) => !xs.includes(elem)));

result = uniao([0, 1, 2])([1, 2, 3]);
result;

// @030 intersec - intercessão entre listas

const intersec = (xs) => (ys) => xs.filter((elem) => ys.includes(elem));

result = intersec([0, 1, 2])([1, 2, 3]);
result;

// @047 splitints

const splitints = (xs) => [
  xs.filter((x) => x % 2 == 1),
  xs.filter((x) => x % 2 == 0),
];

result = splitints([0, 1, 1, 1, 4, 5, 6, 7, 2, 9, 10]);
result;

// @051 paridade

const paridade = (xs) => xs.filter((x) => x == true).length % 2 != 0;

result = paridade([true, true, false, false, true]);
result;

//@054 swap - trocando dois elementos de uma lista

const swap = (xs) => (a) => (b) => {
  if (a >= 0 && a < xs.length && b >= 0 && b < xs.length) {
    let aux = xs[b];
    xs[b] = xs[a];
    xs[a] = aux;
  }
  return xs;
};

result = swap([0, 1, 2, 3, 4, 5, 6])(0)(1);
result;

//@063 euler1 - soma dos múltiplos de 3 e 5

const euler1 = (n) => {
  const arr = Array.from({ length: n - 1 }, (_, k) => k + 1);

  return arr
    .filter((elem) => elem % 3 == 0 || elem % 5 == 0)
    .reduce((soma, elem) => soma + elem, 0);
};

result = euler1(1000);
result;
