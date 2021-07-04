import Data.List

geradorInt :: [[Integer]]
geradorInt = [[x, negate x] | x <- [1 ..]]

gerador1 :: [Integer]
gerador1 = 0 : concat geradorInt

gerador2 :: [Integer]
gerador2 = map (\x -> if even x then negate x else x) $ iterate (+ 1) 1

-- gerador2 = [if even x then negate x else x | x <- [1 ..]]

gerador3 :: [Integer]
gerador3 = iterate (2*) 1
-- gerador3 = [2 ^ x | x <- [0 ..]]

gerador4 n = takeWhile (>=1) (iterate (`div` 2) n)

gerador5 = unfoldr fn
  where
    fn 0 = Nothing 
    fn x = Just (x, x `div` 2)

digitos n = reverse $ unfoldr fn n
    where
        fn 0 = Nothing 
        fn x = Just (x `mod` 10, x `div` 10)