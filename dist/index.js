"use strict";
class Vehicle {
    constructor(make, model, wheels) {
        this.status = "stopped";
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    start() {
        this.status = "started";
    }
    stop() {
        this.status = "stopped";
    }
}
class Car extends Vehicle {
    constructor(make, model) {
        super(make, model, 4);
    }
}
class MotorCycle extends Vehicle {
    constructor(make, model) {
        super(make, model, 2);
    }
}
function printStatus(vehicle) {
    if (vehicle.status === "started") {
        console.log("The vehicle is running.");
    }
    else {
        console.log("The vehicle is stopped.");
    }
}
const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(typeof myHarley.make);
console.log(myHarley.make.toUpperCase());
const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);
class NCycle {
    constructor(make, model, wheels) {
        this.status = "stopped";
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    start() {
        this.status = "started";
    }
    stop() {
        this.status = "stopped";
    }
    print(p = 0) {
        const isMakeArray = Array.isArray(this.make);
        const isModelArray = Array.isArray(this.model);
        if (!isMakeArray && !isModelArray) {
            console.log(`This is a ${this.make} ${this.model} NCycle.`);
        }
        else if (isMakeArray &&
            isModelArray &&
            this.make[p] !== undefined &&
            this.model[p] !== undefined) {
            console.log(`This NCycle has a ${this.make[p]} ${this.model[p]} at ${p}.`);
        }
        else {
            console.log("This NCycle was not created properly.");
        }
    }
    printAll() {
        const isMakeArray = Array.isArray(this.make);
        const isModelArray = Array.isArray(this.model);
        if (isMakeArray && isModelArray) {
            const makeArray = this.make;
            const modelArray = this.model;
            const minLength = Math.min(makeArray.length, modelArray.length);
            for (let i = 0; i < minLength; i++) {
                console.log(`This NCycle has a ${makeArray[i]} ${modelArray[i]} at ${i}.`);
            }
        }
        else if (!isMakeArray && !isModelArray) {
            console.log(`This is a ${this.make} ${this.model} NCycle.`);
        }
        else {
            console.log("This NCycle was not created properly.");
        }
    }
}
const testCycle1 = new NCycle(1, 2, 3);
testCycle1.print();
testCycle1.printAll();
//# sourceMappingURL=index.js.map