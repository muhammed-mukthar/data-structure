#notes

##Algorithm

algotithm is a set of well defined instructions to solve a particular problem

##characterstics of algorithm

well defined

clear and unambiguous

Language independent



#Algorithm analysis


Time complexity :- Amount taken by an algorithm to run

Space complexity :- Amount of memory taken by an algorithm to run



##Asympotic notation 

Big-o -worst case
Omega Notaion -best case
Theta Notation -average case



#Big-O Notation

Calculation not dependent on input size-O(1)

1 loop-O(n)

2 nested loops-O(n^2)

Input size reduced by half-O(logn)


worst case time complexity :- how much time the variable is iterated 

O(n)-Linear time complexity , iterated n times

O(1)-Constant time complexity, constant executed only 1 time

O(n2)-Quadratic time complexity 2 iteration 

O(n3)-Cubic time complexitym 3 iteration

O(logn)-Logarithmic complexity 1/2 iteration of total input


#worst case space complexity


O(n)-Linear space complexity , iterated variable n times

O(1)-Constant space complexity, same variable used 1 time

O(logn)-Logarithmic space complexity 1/2 iteration of total input



#Object Big-O worst case

key value pairs

insert-O(1)

Remove-O(1)

Access-O(1)

Search-O(n)

Object.keys()-O(n)

Object.values()-O(n)

Object.entries()-O(n)


#Array -Big O

An array is an ordered collecion of values

insert/remove at end-O(1)

insert/remove at Begining-O(n)

Access-O(1)

Search-O(n)

push/pop-O(1)

Shift/unshift/concat/slice/splice -O(n)

forEach/map/fiter/reduce - O(n)

