//Binary Tree
//has atmost two children
//binarysearch tree
//left node<root<rightnode

class Node{
    constructor(value){
        this.value=value
        this.right=null
        this.left=null
    }
}


class binarysearchTree{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root===null
    }
}

const bst=new binarysearchTree()

console.log('is emplty',bst.isEmpty());