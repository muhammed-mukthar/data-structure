const nm=require('readline-sync')

const size=parseInt(nm.question('enter size'))
let arr=new Array(4)
console.log(arr.length);
let first=0
let last=(arr.length-1)

let value=nm.question('enter value to be seaRCHED')
for(let i=0;i<size;i++){
    arr[i]=parseInt(nm.question(''))
}

while(first<=last){

    let temp =Math.floor((first+last)/2)
  
     if(arr[temp]==value){
      return   console.log('find at index',temp);
     }else{
        first=temp+1
     }
}
console.log(-1);


