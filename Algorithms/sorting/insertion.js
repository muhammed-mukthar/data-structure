function Insertion(arr){
    for(let i=1;i<arr.length;i++){
         let elementtoInsert=arr[i]
    let j= i-1 
    while(j >= 0 && arr[j] > elementtoInsert){
        arr[j+1]=arr[j]
        j=j-1
    }
    arr[j+1]=elementtoInsert
    }
 
}
const arr=[4,0,1,3,2]
Insertion(arr)
console.log(arr);

