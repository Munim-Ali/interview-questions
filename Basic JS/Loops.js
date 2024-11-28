//SUmm of all number from 1 to 5 using while loop

let sum = 0;
let i = 1;

while (i <= 5) {
  sum = sum + i;
  i++;
}
// console.log(sum);

//Problem 1 -> Find "chai" from array using for loop and store other in new array

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}

// console.log(selectedTeas);

//Problem 2 -> Skip "Paris" from array using for loop and store other in new array
let cities = ["london", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
// console.log(visitedCities);

//Use foreach loop when "chai" found stop the loop and add other in availableTea Array
let teaCollection = [
  "earl grey",
  "green tea",
  "black tea",
  "chai",
  "oolong tea",
];
let availableTeas = [];

teaCollection.forEach((tea) => {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});
// console.log(availableTeas);

//Skip sydeny and store other cities in new array
let worldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

worldCities.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});
// console.log(traveledCities);

//Skip 7 and multiply other numbers by 2 and store in doubleNumbers array

let numbers = [2, 5, 7, 9];
let doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 7) {
    {
      continue;
    }
  }

  doubleNumbers.push(numbers[i] * 2);
}
// console.log(doubleNumbers);
