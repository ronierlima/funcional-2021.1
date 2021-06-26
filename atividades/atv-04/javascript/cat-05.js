let result;
//@013 fibonacci
const fibonacci = (n) => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
result = fibonacci(1);

//@018 frequencia
const frequencia = (n) => (xs) => xs.filter((x) => n == x).length;
result = frequencia(1)([1, 2, 4, 3, 1]);
result;
//@019 unico

const unico = (n) => (xs) => frequencia(n)(xs) == 1;
result = unico(1)([1, 2, 4, 3, 1]);
result;

// @020 maioresQue

const maioresQue = (n) => (xs) => xs.filter((x) => x > n);
result = maioresQue(1)([1, 2, 4, 3, 1]);
result;



// //@021 concatena

// --concatena xs ys = foldr (:) ys xs

// //Utilizando recursão
// concatena [] ys = ys
// concatena (x : xs) ys = x : concatena xs ys

// //@025 menores

// quicksort :: (Ord a) => [a] -> [a]
// quicksort [] = []
// quicksort (x : xs) =
//   let smallerSorted = quicksort [a | a <- xs, a <= x]
//       biggerSorted = quicksort [a | a <- xs, a > x]
//    in smallerSorted ++ [x] ++ biggerSorted

// menores n xs = take n $ quicksort xs

// //@026 alter

// // Utilizando compreensão de lista
// //alter n = concat [[x, -x] | x <- [1..n]]

// //Utilizando recursão
// alter 0 = []
// alter 1 = [1, -1]
// alter n = alter (n - 1) ++ [n, - n]

// //@027 reverso

// reverso :: [a] -> [a]
// reverso [] = []
// reverso (x : xs) = reverso xs ++ [x]

// //@029 intercal - intercalar duas listas

// intercal [] xs = xs
// intercal ys [] = ys
// intercal (x : xs) (y : ys) = x : y : intercal xs ys

// //@032 sequencia

// sequencia 0 m = []
// sequencia n m = sequencia (n -1) m ++ [n + m -1]

// //@037 rotEsq
// rotEsq 0 xs = xs
// rotEsq n (x : xs) = rotEsq (n -1) $ xs ++ [x]

// //@037 rotDir

// rotDir 0 xs = xs
// rotDir n xs = rotDir (n -1) (last xs : init xs)

// //@048 quadperf

// quadperf n = fn 1 n
//   where
//     fn i n
//       | i * i == n = True
//       | i * i > n = False
//       | otherwise = fn (i + 1) n

// //@053 deletee - remover primeira ocorrência

// deletee n [] = []
// deletee n (x : xs)
//   | n == x = xs
//   | otherwise = x : deletee n xs

// //@059 listacc - lista acumulativa

// listacc [] = []
// listacc xs = listacc $ init xs ++ [sum xs]

// //@061 line - linhas de um triângulo aritmético
// //@062 triangle - triângulo aritmético
//   //Não conseguir fazer com recursão
