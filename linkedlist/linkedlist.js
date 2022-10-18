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
    print(){
        if(this.isEmpty()){
            console.log('list is empty');
        }else{
            let current=this.head
            let listvalues=''
            while(current){
                listvalues += `${current.value}`
                current=current.next
            }
            console.log(listvalues);
        }
    
    }
}


const list =new LinkedList()

console.log('list is emoty',list.isEmpty());
console.log('list is not emoty',list.getSize());
list.print()
list.prepend(10)
list.print();
list.prepend(20);
list.print();
list.prepend(30);
list.print();