-- @000

soma = (+)
--soma a b = a + b

-- @002 - iguais - verificar se duas listas são iguais

iguais a b c 
  | a == b && b == c = 3
  | a /= b && a /= c && b /= c = 0
  | otherwise = 2


-- @004 - countNeg

countNeg xs = length (filter (<0) xs)
--countNeg xs = length $ filter (<0) xs
--countNeg xs = length [ x | x <- xs, x < 0 ]

-- @005 - final

final n xs = reverse $ take n $ reverse xs

-- @006 - interior - miolo da lista

interior xs = init $ tail xs

-- @008 - gangorra

gangorra p c p' c' 
  | p * c == p' * c' = 0
  | p * c > p' * c' = -1
  | otherwise = 1

-- @010 - min2

min2 a b 
  | a >= b = a
  | otherwise = b

-- @011 - min3

min3 a b c
  | a < b && a < c = a
  | b < a && b < c = b
  | otherwise = c


