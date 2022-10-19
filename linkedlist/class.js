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
console.log(list.removeFrom(10));
console.log(list.getSize());
console.log(list.removeFrom(0));
console.log(list.getSize());
list.print()
console.log(list.removeFrom(1));
list.print()
console.log(list.getSize());
/* ----------------------------- time compexite ----------------------------- */
