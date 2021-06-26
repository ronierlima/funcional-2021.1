-- 06. Data.List
import Data.List

-- @022 tails - Data.List.tails
-- tails [] = [[]]
-- tails (x : xs) = (x : xs) : tails xs

tails' = Data.List.tails

-- @024 unique - Data.List.nub

-- unique [] = []
-- unique [x] = [x]
-- unique (x:xs) = x : unique [y | y<-xs, y/=x]

unique :: Eq a => [a] -> [a]
unique = Data.List.nub

-- 07. Zip

-- @064 produtoEscalar - utilizando a função zip

produtoEscalar xs ys = sum [x * y | (x, y) <- zip xs ys]

-- @065 indices - busca posições do elemento

indices x xs = [i | (y, i) <- lista, x == y]
  where
    n = length xs - 1
    lista = zip xs [0 .. n]

-- 08. Fold
-- @067 concatMap - Data.List.concatMap
concatMap fn xs = foldl (++) [] (map fn xs)

-- concatMap fn xs = concat (map fn xs)


myToUpper :: Char -> Char
myToUpper c = head [snd y | y <- mapa c, (fst y) == c]
    where mapa c = zip ['a'..'z'] ['A'..'Z'] ++ [(c, c)]

myToLower :: Char -> Char
myToLower x = if x >= 'A' && x <= 'Z' then toEnum (fromEnum x + 32) else x

process :: [Char] -> [Char]
process (x:[]) = []
process (x:xs) = (if x == ' ' then myToUpper(y) else myToLower(y)) : process (xs)
       where y = head xs

titulo :: [Char] -> [Char]
titulo xs = process (' ':xs)

selec u p = [(u !! y) | y<-p]

isPalind [] = True
isPalind [x] = True
isPalind (x:xs) = if x == (last xs) then isPalind (init xs) else False
