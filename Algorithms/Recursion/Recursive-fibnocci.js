
// Problem-Give a number'n',find the nth element of the Fibonacci sequence
// In mathematics,the Fibonacci sequence is a sequence in which each number is the sum of the
// two preceding ones.
// The first two numbers in the sequence are 0 and 1.(0, 1, 1,2,3,5,8 ...)
// recursive Fibonacci(0)=0
// recursiveFibonacci(1)=1
// recursiveFibonacci(6)=8


function RecursiveFibnocci(n){
    if(n < 2){
        return n
    }
    return  RecursiveFibnocci(n-1)+ RecursiveFibnocci(n-2)
}

console.log(RecursiveFibnocci(0));
console.log(RecursiveFibnocci(1));
console.log(RecursiveFibnocci(6));

//Big-O:2^n