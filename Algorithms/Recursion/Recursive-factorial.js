// Problem-Give an integer'n',find the factorial of that integer
// The factorial of a non-negative integer'n', denoted n !, is the product of all positive integers less
// than or equal to'n'.
// Factorial of zero is 1.
// factorial(4)=4*3*2*1=24
// factorial(5)=5*4*3*2*1=120


function RecursiveFactorial(n){
    if(n ===0){
        return 1
    }
   return n * RecursiveFactorial(n-1)

}


console.log(RecursiveFactorial(5));


//BIG-O O(n)