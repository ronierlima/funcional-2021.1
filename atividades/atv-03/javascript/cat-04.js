// @001 max3
let result;

const max3 = (a) => (b) => (c) => Math.max(a, b, c);

result = max3(3)(2)(6);
result;

// @007 somaImpares

const somaImpares = (xs) =>
  xs.filter((x) => x % 2 != 0).reduce((soma, x) => soma + x);

result = somaImpares([1, 2, 3]);
result;

