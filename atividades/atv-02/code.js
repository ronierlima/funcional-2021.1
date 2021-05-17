//A variável "result" está escrita assim sem por exemplo um console.log 
//por que estou usando a extensão Quokka.js

let result;

const pri = a => _ => a;
const ult = _ => b => b;
const troca = f => a => b => f(b)(a);

result = pri(1)(3);
result
result = ult(1)(3);
result
result = troca(pri)(1)(7)
result

const T = pri;
const F = ult;

T.inspect = () => 'Verdadeiro';
F.inspect = () => 'Falso';

//Boolean
// EXP ? pri : ult
//NOT
const NOT = a => a(F)(T);

result = NOT(T);
result

result = NOT(F);
result

const AND = a => b => a(b)(F);

result = AND(T)(T);
result

const OR = a => b => a(T)(b);

result = OR(F)(F);
result

//OPERATIONS

const square = a => a ** 2;
result = square(3);
result