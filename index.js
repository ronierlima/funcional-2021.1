let r;

const pri = a => _ => a;
const ult = _ => b => b;
const troca = f => a => b => f(b)(a);

r = pri(1)(3);
r
r = ult(1)(3);
r
r = troca(pri)(1)(7)
r

const T = pri;
const F = ult;

T.inspect = () => 'Verdadeiro';
F.inspect = () => 'Falso';

//Boolean
// EXP ? pri : ult
//NOT
const NOT = a => a(F)(T);

r = NOT(T);
r

r = NOT(F);
r

const AND = a => b => a(b)(F);

r = AND(T)(T);
r

const OR = a => b => a(T)(b);

r = OR(F)(F);
r

//OPERATIONS

const square = a => a ** 2;
r = square(3);
r

const E = y => y ** 2;

const A = 5;

r = E(E)(4)
r




