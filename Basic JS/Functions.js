const calculateTotal = (price, quantity) => {
  const totalCost = price * quantity;

  return totalCost;
};

// console.log(calculateTotal(40, 4));

// function testOne() {
//   console.log(this);
// }
// // testOne();

// const testTwo = () => {
//   console.log(this);
// };
// testTwo();

//Higher Order Functions
function makeTea(teaType) {
  return `Make tea: ${teaType}`;
}

function processTeaOrder(order) {
  return order("earl grey");
}
let order = processTeaOrder(makeTea);
// console.log(order);

//
function createTeaMake() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}

let teaMaker = createTeaMake();
console.log(teaMaker("green tea"));
