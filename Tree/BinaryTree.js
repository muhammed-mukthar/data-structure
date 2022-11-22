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
    insert(value){
        const newNode=new Node(value) 
        if(this.isEmpty()){
            this.root=newNode
        }else{
              this.insertNode(this.root,newNode)
        }

    }
    insertNode(root,newNode){
        if(newNode.value <root.value){
            if(root.left ===null ){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right ===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    search(root,value){
        if(root ===null){
            return false
        }else{
            if(root.value ===value){
                return true
            }else if(value < root.value){
              return  this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
}

const bst=new binarysearchTree()

console.log('is emplty',bst.isEmpty());

bst.insert(10)
bst.insert(15)
bst.insert(2)
console.log(bst.search(bst.root,10));
console.log(bst.search(bst.root,15));
console.log(bst.search(bst.root,24));