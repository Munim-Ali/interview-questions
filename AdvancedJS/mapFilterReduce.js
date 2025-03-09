//Map creates a new array while foreach updates the existing array

const arr = [21, 44, 10];

const a = arr.map((item) => {
  //   console.log(item);
  return item + 1;
});

// console.log(a);

//FIlter -> creates new array doesnot modify new array
let array = [10, 100, 20, 40, 50, 2, 5];
let sortedArray = array.filter((item) => {
  return item < 10;
});
// console.log(sortedArray);

//Reduce
const newArray = [1, 2, 3, 4, 5, 6, 3, 2, 1, 8];

const reducedArray = newArray.reduce((acc, currentValue) => acc + currentValue);

console.log(reducedArray);
