const person = {
  name: "Munim",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet();

const greetFunc = person.greet;
greetFunc();

const boundGreet = person.greet.bind({ name: "John" });
boundGreet();

//bind, call and apply (DYOR)
