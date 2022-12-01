// GIVEN AN ARRAY OF INTEGERS  SORT THE ARRAY

// CONST ARR=[-6,21,-3,44]

// Insertion(ARR)=>SHOULD RETURN [-6,-3,21,44]



function InsertionSort(arr){

    for(let i=1;i<arr.length;i++){
        let numbertoinsert=arr[i]
        let j=i-1
        while(j >= 0 && arr[j] > numbertoinsert){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=numbertoinsert
    }

}

const arr=[8,20,-2,-4,-6]
InsertionSort(arr)
console.log(arr);


//Big-O O(n^2)