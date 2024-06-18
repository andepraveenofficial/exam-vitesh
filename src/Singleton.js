// Singleton

/*
// Design Pattern : Singleton
Maintain Global Object

Methods :
    * getInstance();
    * display()
    * append()
*/

class Singleton{
    constructor(){
        this.items = { queue:[], stack:[]};
        Singleton.instance  = this;
    }
    
    // call the method without instance
    static getInstance(){
        return Singleton.instance || new Singleton();
    }

    append(item){
        this.display().push(item)
    }

    display(){
        return this.items
    }

    log(){
        if (this.display().queue.length === 0 && this.display().stack.length === 0){
            this.logError();
        }
        else{
            this.logSuccess();
        }
    }

    logSuccess(){
        console.log("Log Success");
    }

    logError(){
        console.log("Log Failure");
    }
}

/*
// Singleton Checking

const instance1 = Singleton.getInstance();
console.log(instance1);

console.log(instance1.display());

instance1.append("data1");
instance1.append("data2");
instance1.append("data3");
instance1.append("data4");

console.log(instance1.display());

console.log("-----------");

const instance2 = Singleton.getInstance();
console.log(instance2.display())
instance2.append("data5");
instance2.append("data6");

console.log(instance2.display());
console.log(instance1.display())

*/

const singleton = Singleton;
module.exports = singleton;
