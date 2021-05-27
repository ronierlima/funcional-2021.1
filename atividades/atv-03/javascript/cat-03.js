let result;
// @000

const soma = (a) => (b) => a + b;
//const soma = (a, b) => a + b;

result = soma(1)(3);
result;

// @002 - iguais - verificar se duas listas são iguais

const iguais = (a) => (b) => (c) => {
  if (a === b && b === c) return 3;
  if (a !== b && a !== c && b !== c) return 0;
  return 2;
};

result = iguais(1)(3)(3);
result;

// // @004 - countNeg

const countNeg = (xs) => xs.filter((x) => x < 0).length;

result = countNeg([1, 2, -3]);
result;

// // @005 - final

const final = (n) => (xs) => xs.slice(-n);

result = final(2)([1, 2, -3]);
result;

const gangorra = (p) => (c) => (p1) => (c1) => {
  if (p * c == p1 * c1) return 0;
  if (p * c > p1 * c1) return -1;
  return 1;
};

result = gangorra(30)(100)(60)(50);
result;

// // @010 - min2

//const min2 = (a) => (b) => Math.min(a, b)
const min2 = (a) => (b) => {
  if (a <= b) return a;
  return b;
};

result = min2(1)(3);
result;

// // @011 - min3

//const min3 = (a) => (b) => (c) => Math.min(a, b, c)
const min3 = (a) => (b) => (c) => {
  if (a < b && a < c) return a;
  if (b < a && b < c) return b;
  return c;
};