// Stack

/*
Data Structure : Stack -> FILO

Methods : 
    * push()
    * size();
    * isEmpty()
    * peek()
    * pop()
*/

class Stack{
    constructor(){
        this.items = [];
        this.totalArea = 0;
    }

    push(shape){
        // const obj = {area, perimeter}
        this.display().push(shape);
        const area = shape.area();
        this.totalArea += area;
    }

    size(){
        return this.display().length;
    }

    isEmpty(){
        return this.size() === 0;
    }

    peek(){
        if (this.isEmpty()){
            return null
        }
        else{
            return this.display()[this.size() - 1];
        }
    }

    pop(){
        if (!this.peek()){
            return null;
        }
        else{
            const poppedItem = this.display().pop();
            const area = poppedItem.area();

            this.totalArea -= area
            return poppedItem;
        }
    }

    display(){
        return this.items;
    }
}

/*
// Stack Checking
const stack = new Stack();
stack.push("data1");
stack.push("data2");
stack.push("data3");
stack.push("data4");

console.log(stack.display());

console.log(stack.peek())

console.log(stack.pop());
console.log(stack.display());

*/

const stack = new Stack();
module.exports = stack;

