class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size ===0
    }

    getSize(){
        return this.size
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node

this.size++
       }else{
        node.next = this.head
        this.head=node
       }
    }
}


const list =new LinkedList()

console.log('list is emoty',list.isEmpty());
console.log('list is not emoty',list.getSize());
console.log(list.prepend(10));
console.log(list.prepend(20));
console.log(list.prepend(30));