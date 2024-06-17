
/* -----> Shape Factory <----- */
const shapeFactory = require("./Factory.js");

const rectangle = shapeFactory.createShape("rectangle", [10, 20]);
const square = shapeFactory.createShape("square",10);

/* -----> Queue <----- */
const queue = require("./Queue.js");

/* -----> Stack <----- */
const stack = require("./Stack.js");

/* -----> Singleton <----- */
const singleton = require("./Singleton.js");
const instance1 = singleton.getInstance();

/* >>>>>>>>>>>>> Start <<<<<<<<<<<<<<<<*/

/*
const rectangle1 = shapeFactory.createRectangle(10, 20);
queue.enqueue(...rectangle1.areaAndPerimeter()); // area, perimeter
console.log(queue.display())

const square1 = shapeFactory.createSquare(10);
queue.enqueue(...square1.areaAndPerimeter()); // area, perimeter
console.log(queue.display())

const rectangle2 = shapeFactory.createRectangle(20, 30);
queue.enqueue(...rectangle2.areaAndPerimeter()); // area, perimeter
console.log(queue.display())

*/

class Main{
    constructor(){
        this.items = [];
    }

    add(shapeType, values){
        console.log(shapeType, values)
        const shape = shapeFactory.createShape(shapeType, values);
        
        const areaAndPerimeter = shape.areaAndPerimeter();
        // console.log(areaAndPerimeter);
        const [area, perimeter] = areaAndPerimeter

        queue.enqueue(area, perimeter);
        console.log("total perimeter", queue.totalPerimeter)
        if (queue.totalPerimeter > 100){
            console.log("total perimeter exceeded")
            while (queue.totalPerimeter > 100){
                const dequeuedItem = queue.dequeue();
                const item = [dequeuedItem.area, dequeuedItem.perimeter]
                stack.push(...item);
           
               console.log("total area : ", stack.totalArea);
               if (stack.totalArea > 200){
                 console.log("total area exceeded");
                 stack.pop();
                }
            }
        }

    }
}

// instance
const main = new Main();

main.add("rectangle", [8, 12]);

console.log("queue : ", queue.display())
console.log("stack :", stack.display())

console.log("----------")

main.add("rectangle", [10, 20]);

console.log("queue : ", queue.display())
console.log("stack :", stack.display())

console.log("----------")

main.add("square", 10);

console.log("queue : ", queue.display())
console.log("stack :", stack.display())

console.log("----------")

