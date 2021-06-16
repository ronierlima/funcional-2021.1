let result;
//@013 fibonacci
const fibonacci = n => n <= 1 ? 1 : fibonacci (n - 1) + fibonacci (n - 2)
result = fibonacci(1)

//@018 frequencia

//Utilizando filter
//frequencia n xs = length $ filter (== n) xs

// Utilizando compreensão de lista
//frequencia n xs = length [x | x <- xs, n == x]
//frequencia n xs = sum [1 | x <- xs, n == x]

// Utilizando recursão
// frequencia n [] = 0
// frequencia n (x : xs)
//   | n == x = 1 + frequencia n xs
//   | otherwise = frequencia n xs

// //Utilizando fold
// //frequencia n = foldl igual 0
// //  where
// //    igual acumulador x
// //      | x == n = acumulador + 1
// //      | otherwise = acumulador

// //@019 unico

// //Utilizando filter
// //unico n xs
// //  | tam == 1 = True
// //  | otherwise = False
// //  where
// //    tam = length $ filter (== n) xs

// //Utilizando recursão

// unico n xs = frequencia n xs == 1

// //@020 maioresQue

// //Utilizando filter
// //maioresQue n xs = filter (>n) xs

// //Utilizando CList
// //maioresQue n xs = [x | x <- xs, x > n]

// //Utilizando Recursão

// maioresQue n [] = []
// maioresQue n (x : xs)
//   | x > n = x : maioresQue n xs
//   | otherwise = maioresQue n xs

// //@021 concatena

// //Utilizando Foldr
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