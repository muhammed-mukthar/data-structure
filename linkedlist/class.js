class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  getSize() {
    return this.size;
  }

  //O(1)
  prependvalue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.size++;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  print() {
    if (this.isEmpty()) {
      console.log("linked list is empty");
    } else {
      let listvalues = "";
      let current = this.head;
      while (current != null) {
        listvalues += `${current.value}`;
        current = current.next;
      }
      console.log(listvalues);
    }
  }

  search(value){
    if(this.isEmpty()){
        return console.log('linked list is empty');
    }
    let index=0
    let current=this.head
    while(current){
        if(current.value == value){
            return index
        }
        current=current.next
        index++ 
    }
    return -1
 
  }

  //O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  //O(n)
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return console.log("fd");
    }
    if (index == 0) {
      this.prependvalue(value);
    }
    if (index > 0) {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  //O(n)
  removeValue(value){
    if(this.isEmpty()){
        return console.log('empty');
    }else{
        if(this.head.value === value){
            this.head=this.head.next
            this.size--
            return value
        }else{
            let prev=this.head
            while(prev.next && prev.next.value != value){
                prev=prev.next
            }
            if(prev.next){
            const    removeNode=prev.next
                prev.next=removeNode.next
                this.size--
                return value
            }
            return null
        }

    }
  }

reverse(){
    let prev=null
    let curr=this.head
    while(curr){
        let next=curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
    this.head=prev
}

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return console.log("invalid caze");
    }
    let removeNode;
    if (index == 0) {
      removeNode = this.head;
      this.head = this.head.next;
    }else{
        let prev=this.head
        for(let i=0;i<index -1 ;i++){
            prev=prev.next
        }
        removeNode = prev.next
        prev.next = removeNode.next
    }
    this.size--;
    return removeNode.value;
  }
}

const list = new LinkedList();

console.log(list.isEmpty());

console.log(list.getSize());

list.print();

list.insert(10, 0);
list.print();
list.insert(30, 0);
list.print();
list.insert(20, 1);
list.print();
list.insert(40, 1);
list.print();
console.log(list.getSize());
list.reverse() 

list.print()
/* ----------------------------- time compexite ----------------------------- */
