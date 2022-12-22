class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    if (this.head == null) {
      return true;
    } else {
      return false;
    }
  }

  prepend(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = value;
      this.size++;
    } else {
      node.next = this.head;
      this.head = node;
      this.size++;
    }
  }

  print() {
    if (this.isEmpty()) {
      return console.log("empty");
    }
    let curr = this.head;
    let listvalue = "";
    while (curr.next != null) {
      listvalue += ` ${curr.value}`;
      curr = curr.next;
    }
    return console.log(listvalue);
  }

  insert(value, index) {
    if (index < 0 && index > this.size) {
      return console.log("not possible");
    }

    if (index == 0) {
      this.prepend(value);
    }
    if (index > 0) {
      let node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  removeIndex(index) {
    if (this.isEmpty) {
      return null;
    }
    let prev = this.head;
    let removedNode;
    for (let i = 1; i < index - 1; i++) {
      prev = prev.next;
    }
    removedNode = prev.next;
    prev.next = removedNode.next;

    this.size--;
    return removedNode.value;
  }
}

let list = new linkedList();

list.insert(10, 0);
list.insert(30, 0);
list.prepend(40);
list.print();
list.removeIndex(1);
list.print();
console.log(list.isEmpty());
