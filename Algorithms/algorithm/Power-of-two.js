// Problem-Give a positive integer'n', determine if the number is a power of 2 or not
// An integer is a power of two if there exists an integer'x'such that'n'=== 2x
// isPowerOfTwo(1)=true(2⁰)
// isPowerOfTwo(2)=true(2¹)
// isPowerOfTwo(5)=false

function PowerOfTwo(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n %2 ==!0){
            return false
        }
        n=n/2
    }
    return true
}

console.log(PowerOfTwo(1));//true
console.log(PowerOfTwo(2));//true
console.log(PowerOfTwo(5));//false

//bitwise
function isPowerOfTwo(n){
    if(n < 1){
        return false
    }
    return (n & (n-1)) === 0
}
console.log(isPowerOfTwo(1));//true
console.log(isPowerOfTwo(2));//true
console.log(isPowerOfTwo(5));//false



//PowerOfTwo() BIG-O :O(log m)

//isPowerOfTwo() BIG-O :O(1)