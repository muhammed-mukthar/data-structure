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
