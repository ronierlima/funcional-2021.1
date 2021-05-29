-- @007 somaImpares

--somaImpares xs = sum [x | x <- xs, odd x]
somaImpares = sum . filter odd

-- @001 max3

-- max3 a b c
--   | a >= b && b >= c = a
--   | b >= a && b >= c = b
--   | otherwise = c

--max3 a b c = max a $ max b c

max3 a b c = maximum [a, b, c]

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

pertence n [] = False
pertence n (x:xs) = n == x || pertence n xs 


-- @016 total
-- @017 maior
-- @023 corpo
-- @028 divide
-- @030 uniao
-- @031 intersec - intercessão entre listas
-- @047 splitints
-- @009 sublist
-- @051 paridade
-- @054 swap - trocando dois elementos de uma lista
-- @063 euler1 - soma dos múltiplos de 3 e 5