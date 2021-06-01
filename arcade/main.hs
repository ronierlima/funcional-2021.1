-- @000

soma = (+)

--soma a b = a + b

-- @001 max3

-- max3 a b c
--   | a >= b && b >= c = a
--   | b >= a && b >= c = b
--   | otherwise = c

--max3 a b c = max a $ max b c

max3 a b c = maximum [a, b, c]

-- @002 - iguais - verificar se duas listas são iguais

iguais a b c
  | a == b && b == c = 3
  | a /= b && a /= c && b /= c = 0
  | otherwise = 2

-- @004 - countNeg

countNeg xs = length (filter (< 0) xs)

--countNeg xs = length $ filter (<0) xs
--countNeg xs = length [ x | x <- xs, x < 0 ]

-- @005 - final

final n xs = reverse $ take n $ reverse xs

-- @006 - interior - miolo da lista

interior xs = init $ tail xs

-- @007 somaImpares

--somaImpares xs = sum [x | x <- xs, odd x]
somaImpares = sum . filter odd

-- @008 - gangorra

gangorra p c p' c'
  | p * c == p' * c' = 0
  | p * c > p' * c' = -1
  | otherwise = 1

-- @009 sublist
sublist ini fim xs =
  let ini' = if ini >= 0 then ini else ini + length xs
      fim' = if fim >= 0 then fim else fim + length xs
   in drop ini' . take fim' $ xs

-- @010 - min2

min2 a b
  | a >= b = a
  | otherwise = b

-- @011 - min3

min3 a b c
  | a < b && a < c = a
  | b < a && b < c = b
  | otherwise = c

-- @012 fatorial

-- fatorial n | n == 0 = 1
--            | n /= 0 = n * fatorial(n - 1)

fatorial n = product [1 .. n]

-- @014 elemento

-- elemento i xs = xs !! indice
--   where
--     tamanho = length xs
--     indice
--       | i < 0 = i + tamanho
--       | otherwise = i

buscaRecursiva i (x : xs)
  | i > tamanho = error "buscaRecursiva: index too large"
  | i == 0 = x
  | otherwise = buscaRecursiva (i - 1) xs
  where
    tamanho = length (x : xs)

elemento indice xs = buscaRecursiva i xs
  where
    tamanho = length xs
    i
      | indice < 0 = indice + tamanho
      | otherwise = indice

-- @015 pertence
--Opção 1
-- pertence :: Integer -> [Integer] -> Bool
-- pertence = elem

--Opção 2
-- pertence n = not. null. filter (== n)
-- pertence n xs = not. null $ [n | x <- xs, x == n]

--Opção 3
pertence n [] = False
pertence n (x : xs) = n == x || pertence n xs

-- @016 total
--Caso 1
--total = sum . map (\_ -> 1)

--Caso 2 - recursão
--total [] = 0
--total (x:xs) =  1 + total xs

--Caso 3 - foldr
total :: [Integer] -> Int
total = foldr (const (1 +)) 0

-- @017 maior
maior [x] = x
maior (x : xs) = if x > resto then x else resto
  where
    resto = maior xs

-- @023 corpo

--corpo = tail
--corpo (x:xs) = xs
corpo (_ : xs) = xs
corpo [] = error "corpo: lista vazia"

-- @028 divide
--divide xs n = (take n xs, drop n xs)
divide xs n = splitAt n xs

-- @030 uniao

uniao xs ys = xs ++ [y | y <- ys, y `notElem` xs]

-- @031 intersec - intercessão entre listas

intersec xs ys = [y | y <- ys, y `elem` xs]

-- @047 splitints
splitints xs = ([x | x <- xs, odd x], [y | y <- xs, even y])

-- @051 paridade

paridade [] = False
paridade xs = positivos == negativos
  where
    positivos = length (filter (== True) xs)
    negativos = length (filter (== False) xs)

-- @054 swap - trocando dois elementos de uma lista
-- Essa nn consegui fazer só
swaping xs i j = esquerda ++ [elemJ] ++ meio ++ [elemI] ++ direita
  where
    elemI = xs !! i
    elemJ = xs !! j
    esquerda = take i xs
    meio = take (j - i - 1) (drop (i + 1) xs)
    direita = drop (j + 1) xs

swap xs i j = if (i <= tam) && (j <= tam) then swaping xs i j else xs
  where
    tam = length xs

-- @063 euler1 - soma dos múltiplos de 3 e 5
euler1 n = [x | x <- [1 .. n -1], (x `mod` 3 == 0) || (x `mod` 5 == 0)]
