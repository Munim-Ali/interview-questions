//Problem 1
const teaFlavors = ["green tea", "black tea", "oolong tea"];

const firstTea = teaFlavors[0];
console.log(firstTea);

//Problem 2
const cities = ["London", "Tokyo", "Paris", "New York"];

const favouriteCity = cities[2];
console.log(favouriteCity);

//Change the second element problem 3
const teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes);

//Add element to array using push problem 4
const citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);

//Remove element from an array using pop problem 5
const teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();
console.log(lastOrder);

//soft copy of array problem 6
const popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTea = popularTeas;
console.log(softCopyTea);
console.log(popularTeas);

//hard copy of array problem 7
const topCities = ["Berlin", "Signapore", "New York"];
let hardCopyCities = [...topCities]; //First way to use spread operator
// let hardCopyCities = topCities.slice(); Second way but not recommended
topCities.pop();
console.log(hardCopyCities);

//Merge arrays problem 8

const europeanCities = ["Paris", "Rome"];
const asianCities = ["Tokyo", "Bankok"];

const worldCities = europeanCities.concat(asianCities);
console.log(worldCities);

//Check if element is there
let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);
