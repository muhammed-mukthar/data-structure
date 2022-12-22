// Give a number n find the first n element of the fibnocci sequence
// In mathematics,the Fibonacci sequence is a sequence in which each number is the sum of the
// two preceding ones.
// The first two numbers in the sequence are 0 and 1.
// fibonacci(2)=[0,1]
// fibonacci(3)=[0,1,1]
// fibonacci(4)=[0,1,1,2,]




function fibnocciseries(n){
    const fib=[0,1]
    for(let i=2;i< n;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
}

console.log(fibnocciseries(7)); 


// Big O = O(n)

