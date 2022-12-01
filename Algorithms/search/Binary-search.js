// Binary search
//  Problem - Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the
//  array. Return -1 if the target element is not found.



function BinarySearch(arr,target){

let leftindx=0,rightIndex=arr.length -1

while(leftindx <=  rightIndex){
    let middleIndex=Math.floor((leftindx+rightIndex)/2)
    if(target===arr[middleIndex]){
        return middleIndex
    }else if(target <arr[middleIndex]){
        rightIndex=middleIndex-1

    }else{
        leftindx= middleIndex +1
    }
}
return -1

 
}

let ar=[-5,1,2,33,55,66]
  
console.log(BinarySearch(ar,33));


//Big-O :- O(log n)