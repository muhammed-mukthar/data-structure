class Stack{
    constructor(){
        this.items=[]
    }

    push(element){
        this.items.push(element)

    }

    pop(){
       return this.items.pop()
        
    }
    peek(){
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length ===0
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString());
    }

}


const stake=new Stack()

stake.push(3)
stake.push(4)
stake.push(12)
console.log(stake.size());
console.log(stake.print());

console.log(stake.pop());
console.log(stake.peek());


//time complexity is constant O(1)

