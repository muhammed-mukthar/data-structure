// Recursive binary search
//  Problem - Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the
//  array. Return 1- if the target element is not found.
//  arr = [-5, 2, 4, 6, 10], t = 10 -> Should return 4
//  arr = [-5, 2, 4, 6, 10], t= 6-> Should return 3
//  arr = [-5, 2, 4, 6, 10], t = 20-> Should return -1



function RecursiveBinary(arr,target){
    return rsearch(arr,target,0,arr.length -1)
}

function rsearch(arr,target,first,last){
    if(first > last){ 
        return -1
    }

    let middle=Math.floor((first+last)/2)
    console.log( target === arr[middle]);
    if( target === arr[middle]){
     
        return 2
    }
     if(target < arr[middle]){
    return    rsearch(arr,target,first,middle -1)
       
    }else{
    return    rsearch(arr,target,middle + 1,last)
    }
}



console.log(RecursiveBinary([-3,1,22,33,44,55],1));

//big-o : O(logn)

        