// Problem -Give an integer 'n', find the factorial of that integer

// In mathematics, the factorial of a non-negative integer 'n', denoted n !, is the product of all
// positive integers less than or equal to 'n'.
// Factorial of zero is 1.
// factorial(4) = 4*3*2*1 = 24
// factorial(5)= 5*4*3*2*1 = 120


function factorial(n){
let sum=1
for(let i=1;i<=n;i++){
    sum=sum * i
}
return sum
}

console.log(factorial(4));//24

//big-O : O(n)