// Problem-Give a natural number'n',determine if the number is prime or not
// A prime number is a natural number greater than 1 that is not a product of two smaller natural
// numbers.
// isPrime(5)=true(1*5 or 5*1)
// isPrime(4)=false(1*4 or 2*2 or 4*1)


function primeNumber(n){
    if(n<2){
        return false
    }
    for(let i=2;i<n;i++){
        if(n%i ===0){
            return false
        }
    }
    return true
    

}


function isPrime(n){
    if(n<2){
        return false
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i ===0){
            return false
        }
    }
    return true
    

}

console.log(primeNumber(3));
console.log(primeNumber(5));
console.log(primeNumber(4));

console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(4));
//primeNumber()  BIg-O: O(n)
//isPrime()  BIg-O: O(sqrt(n))