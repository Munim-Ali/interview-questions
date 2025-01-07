let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car.start());

// THe Person function is a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John", 20);
// console.log(john.name);

//Prototype and Prototypal Chain

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} can makes a sound`;
};

Array.prototype.munim = function () {
  return `Custom Method ${this}`;
};

let myArray = [1, 2, 3];
// console.log(myArray.munim());

let myNewArray = [1, 2, 3, 4, 5, 6];
// console.log(myNewArray.munim());

//Classes and Inheritance
// Functions inside the "Class" are called "methods"
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} : This is a  inheritance example`;
  }
}

let myCar = new Car("Suzuki", "Alto");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("Suzuki", "Alto");
// console.log(vehOne);

//Encapsulation -> Restricting direct access to data object

class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$${this.#balance}`;
  }
}

let account = new BankAccount();
account.deposit(500);
account.deposit(600);
// console.log(account.getBalance());

// Abstraction -> Hide the functionality just return required data

class CoffeeMachine {
  start() {
    //callDB
    //FilterValue

    return "Starting the machine...";
  }

  brewCoffe() {
    //complex calculations
    return "brew coffee";
  }

  pressStart() {
    let msgOne = this.start();
    let msgTwo = this.brewCoffe();
    return `${msgOne} + ${msgTwo}`;
  }
}

let myMachiine = new CoffeeMachine();
// console.log(myMachiine.pressStart());

// Polymorphism

class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguin can't Fly...`;
  }
}

let bird = new Bird();
let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());

//Static Method -> Static methods are only be called by Class itself.
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

//This can't be done to accss static methods
// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 4));

//Correct way to access static methods
// console.log(Calculator.add(2, 4));

//Getter and Setters

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      console.error("Salary cannot be in negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You're not allowed to see salary`;
  }

  set salary(val) {
    if (val < 0) {
      console.error("Invalid Salary");
    } else {
      this._salary = val;
    }
  }
}
let emp1 = new Employee("Alice", 50000);
console.log(emp1.salary);

// emp1.salary = -60000;
