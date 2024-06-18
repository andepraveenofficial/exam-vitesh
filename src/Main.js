
/* -----> Shape Factory <----- */
const shapeFactory = require("./Factory.js");

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
    
    add(shapeType, values){
        // console.log(shapeType, values)
        const shape = shapeFactory.createShape(shapeType, values);
        
        const areaAndPerimeter = shape.areaAndPerimeter();
        // console.log(areaAndPerimeter);
        const [area, perimeter] = areaAndPerimeter

        // queue.enqueue(area, perimeter);
         queue.enqueue(shape);
        
        // console.log("total perimeter", queue.totalPerimeter)
        if (queue.totalPerimeter > 100){
            console.log("total perimeter exceeded")
            while (!queue.isEmpty()){
                const dequeuedItem = queue.dequeue();
                // console.log(item)
                stack.push(dequeuedItem);
            }
        }

        if (stack.totalArea > 200){
            console.log("total area exceeded");
            while (!stack.isEmpty()){
                stack.pop();
            }
           }

        console.table(instance1.display());
    }
}

// instance
const main = new Main();

main.add("rectangle", [8, 12]);
// console.log("queue : ", queue.display())
// console.log("stack :", stack.display())

// console.log("----------")

main.add("rectangle", [10, 20]);

// console.log("queue : ", queue.display())
// console.log("stack :", stack.display())

// console.log("----------")

main.add("square", 10);


// console.log("queue : ", queue.display())
// console.log("stack :", stack.display())

// console.log("----------")

main.add("square", 20);

// console.log("queue : ", queue.display())
// console.log("stack :", stack.display())

// console.log("----------")

main.add("square", 30);

// console.log("queue : ", queue.display())
// console.log("stack :", stack.display())

// console.log("================")

// console.log(queue);
// console.log(stack);

// console.log("===============")

console.log("----------------")

instance1.log();

console.log("===================")