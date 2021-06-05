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
