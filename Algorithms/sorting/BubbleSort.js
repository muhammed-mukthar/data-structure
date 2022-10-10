// GIVEN AN ARRAY OF INTEGERS  SORT THE ARRAY

// CONST ARR=[-6,21,-3,44]

// BUBBLESORT(ARR)=>SHOULD RETURN [-6,-3,21,44]

function BubbleSort(a){
    let temp=0
    let swapped
    do{
         swapped=false
for(let i=0;i<a.length;i++){
    if(a[i] > a[i+1]){
        temp =a[i]
        a[i]=a[i+1]
        a[i+1]=temp
        swapped=true
    }
}
    }while(swapped)
}
const arr=[8,20,-2,-4,-6]
BubbleSort(arr)
console.log(arr);


//BIG-O O(n^2)