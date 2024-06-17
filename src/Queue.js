// Queue

/*
Data Structure : Queue -> FILO

Methods :
    * enqueue()
    * size()
    * isEmpty()
    * peek()
    * dequeue()
    * display()
*/


class Queue{
    constructor(){
        this.items = [];
        this.totalPerimeter = 0;
    }

    enqueue(area, perimeter){
        const obj = {area, perimeter}
        this.display().push(obj);
        this.totalPerimeter += perimeter;
    }

    size(){
        return this.display().length;
    }

    isEmpty(){
        return this.size() === 0
    }

    peek(){
        if (this.isEmpty()){
            return null
        }
        else{
            const peekItem = this.display()[0];
            return peekItem;
        }
    }

    dequeue(){
        if (!this.peek()){
            return null
        }
        else{
            const firstItem = this.display().shift();
            this.totalPerimeter -= firstItem.perimeter;
            return firstItem;
        }
    }

    display(){
        return this.items;
    }
}

/*


// Checking 

const queue = new Queue();
console.log(queue);

console.log(queue.display());
queue.enqueue(200, 60);
queue.enqueue(600, 100);
queue.enqueue(300, 80);


console.log(queue.display());

console.log(queue.peek());
queue.dequeue();

console.log(queue.display());
*/




const queue = new Queue();
module.exports = queue;


