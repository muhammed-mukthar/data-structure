// Linear search
// Problem-Given an array of'n'elements and a target element't', find the index of't'in the
// array. Return -1 if the target element is not found.



function Search(a,search){

    for(let i=0;i<a.length;i++ ){
        if(a[i] ==search){
            return i
        }
        
    }
    return -1
}

let array=[1,2,3,4,5,6]

console.log(Search(array,53));//-1
console.log(Search(array,3))//2


//BIG-O = O(n)