# notes

# Algorithm

algotithm is a set of well defined instructions to solve a particular problem

## characterstics of algorithm

well defined

clear and unambiguous

Language independent



## Algorithm analysis


Time complexity :- Amount taken by an algorithm to run

Space complexity :- Amount of memory taken by an algorithm to run



## Asympotic notation 

Big-o -worst case
Omega Notaion -best case
Theta Notation -average case



# Big-O Notation

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


## worst case space complexity


O(n)-Linear space complexity , iterated variable n times

O(1)-Constant space complexity, same variable used 1 time

O(logn)-Logarithmic space complexity 1/2 iteration of total input



## Object Big-O worst case

key value pairs

insert-O(1)

Remove-O(1)

Access-O(1)

Search-O(n)

Object.keys()-O(n)

Object.values()-O(n)

Object.entries()-O(n)


## Array -Big O

An array is an ordered collecion of values

insert/remove at end-O(1)

insert/remove at Begining-O(n)

Access-O(1)

Search-O(n)

push/pop-O(1)

Shift/unshift/concat/slice/splice -O(n)

forEach/map/fiter/reduce - O(n)



# Recursion

- Recursion is a problem solving technique where the solution depends on solutions to smaller
instances of the same problem

- recursion is when a function calls itself



- Every recursive solution needs to have a base case-a condition to terminate the recursion.

- Recursion might simplify solving a problem but it does not always translate to a faster solution.


- A recursive solution may be far worse compared to an iterative solution.

### TIPS

- Figure out how to break down the problem into smaller versions of the same problem

- Identify the base case for recursion



# circular queue


The size of the queue is fixed and a single block of memory is used as if the first
element is connected to the last element
Also referred to as circular buffer or ring buffer and follows the FIFO principle
A circular queue will reuse the empty block created during the dequeue operation
When working with queues of fixed maximum size, a circular queue is a great
implementation choice
The Circular Queue data structure supports two main operations
Enqueue,which adds an element to the rear/tail of the collection
Dequeue,which removes an element from the front/head of the collection


# use cases

clock 

streaming data

Traffic lights



# implementation

enqueue(element) -add an element to the queue
dequeue()- remove the oldest element from the queue
isFull()-check if the queue is full
isEmpty()-check if the queue is empty
peek()-get the value of the element at the front of the queue without removing
size()-get the number of elements in the queue
print()-visualize the elements in the queue



# stack

# use cases

browser history tracking 

undo operation in typing

call stack in javascript run time


# methods


push(element)-add an element to the top of the stack
pop()-remove the top most element from the stack
peek()-get the value of the top element without removing it
isEmpty()-check if the stack is empty
size()-get the number of elements in the stack
print()-visualize the elements in the stack


# queue

# use cases

printers 

cpi tasking scheduling

callback queue in js


# operations


enqueue(element) -add an element to the queue
dequeue()- remove the oldest element from the queue
peek()-get the value of the element at the front of the queue without removing it
isEmpty()-check if the queue is empty
size()-get the number of elements in the queue
print()-visualize the elements in the queue