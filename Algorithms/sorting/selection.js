function selection(arr){
    
    for(let i=0;i<arr.length-1;i++){
        let min=i
        for(let j=i+1;j<arr.length;j++){
              if(arr[j]<arr[min]){
            min=j
        }
        }
        if(min!==i){
            let temp=arr[i]
            arr[i]=arr[min]
            arr[min]=temp
        }
    }
    return arr

}

let arr=[4,12,2,6,4]

selection(arr)
console.log(arr);
