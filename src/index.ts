class Vehicle {
  make: string;
  model: string;
  wheels: number;
  status: "started" | "stopped" = "stopped";

  constructor(make: string, model: string, wheels: number) {
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
/* Part 2 fixes (seperated by the bullets)

- added data annotations parameters of the constructor,
added data types for the properties in the class itself,
used union literals for the status 
-----------------------------------------------------
- added date annotations parameters for the constructors of Car
and Motorcycle classes
- changed the super accessing the parent constructor's wheels'
property to an actual number instead of string
-----------------------------------------------------
-set the printStatus function parameter datatype to "Vehicle"
- set the first if parameter to have strict equality to "started" instead of running
-----------------------------------------------------
- toUpperCase wasn't camel case (i spent 30 minutes trying to figure this part out...)
- set mdl to model on myBuick
*/
//////

class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 4);
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}

function printStatus(vehicle: Vehicle) {
  if (vehicle.status === "started") {
    console.log("The vehicle is running.");
  } else {
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

//Part 3

class NCycle<T> {
  make: T | T[];
  model: T | T[];
  wheels: number;
  status: "started" | "stopped" = "stopped";

  constructor(make: T | T[], model: T | T[], wheels: number) {
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
  //added print method
  print(p: number = 0): void {
    const isMakeArray = Array.isArray(this.make);
    const isModelArray = Array.isArray(this.model);

    if (!isMakeArray && !isModelArray) {
      console.log(`This is a ${this.make} ${this.model} NCycle.`);
    } else if (
      isMakeArray &&
      isModelArray &&
      (this.make as T[])[p] !== undefined &&
      (this.model as T[])[p] !== undefined
    ) {
      console.log(
        `This NCycle has a ${(this.make as T[])[p]} ${
          (this.model as T[])[p]
        } at ${p}.`
      );
    } else {
      console.log("This NCycle was not created properly.");
    }
  }
  printAll(): void {
    const isMakeArray = Array.isArray(this.make);
    const isModelArray = Array.isArray(this.model);

    if (isMakeArray && isModelArray) {
      const makeArray = this.make as T[];
      const modelArray = this.model as T[];
      const minLength = Math.min(makeArray.length, modelArray.length);

      for (let i = 0; i < minLength; i++) {
        console.log(
          `This NCycle has a ${makeArray[i]} ${modelArray[i]} at ${i}.`
        );
      }
    } else if (!isMakeArray && !isModelArray) {
      console.log(`This is a ${this.make} ${this.model} NCycle.`);
    } else {
      console.log("This NCycle was not created properly.");
    }
  }
}
