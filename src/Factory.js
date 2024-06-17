// Factory Method

/*
Design Pattern : Factory Method

ShapeClass
RectangleClass -> ShapeClass
SquareClass -> ShapeClass
ShapeFactory -> Rectangle/Square -> ShapeClass


send Input : 
Rectangle :
   - length
   - breadth
Square :
    - side
*/

class Shape{
    area(){
        throw new Error("shape method must overridden!");
    }

    perimeter(){
        throw new Error("shape method must overridden!");
    }
}

class Rectangle extends Shape{
    constructor(length, breadth){
            super();
            this.length = length;
            this.breadth = breadth;
    }

    area(){
        const result = this.length * this.breadth;
        return result
    }
    
    perimeter(){
        const result = (2 * this.length) + (2 * this.breadth);
        return result;
    }

    areaAndPerimeter(){
        return [this.area(), this.perimeter()]
    }
}

class Square extends Shape{
    constructor(side){
        super();
        this.side = side;
    }

    area(){
        const result = this.side * this.side;
        return result;
    }

    perimeter(){
        const result = 4 * this.side;
        return result
    }

    areaAndPerimeter(){
        return [this.area(), this.perimeter()]
    }
}

class ShapeFactory{
    createShape(shapeType, args){
        switch(shapeType){
            case 'rectangle':
                return new Rectangle(...args);
            case 'square':
                return new Square(args);
            default:
                throw new Error('Invalid shape type');
        }
    }
}


/*
// Checking

const shapeFactory = new ShapeFactory();

const rectangle = shapeFactory.createShape("rectangle", [10, 20]);
console.log(rectangle.area())
console.log(rectangle.perimeter())

const square = shapeFactory.createShape("square", 10);
console.log(square.area());
console.log(square.perimeter());

console.log(rectangle.areaAndPerimeter())
console.log(square.areaAndPerimeter())


*/

const shapeFactory = new ShapeFactory();
module.exports = shapeFactory;
