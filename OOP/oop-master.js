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

//Classes
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
console.log(vehOne);
