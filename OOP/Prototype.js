// Ques: What is Prototype?
//Ans: Extra properties and functionalities in any of the given data type.

//Example syntax
let genericCar = {
  type: 4,
};

let tesla = { driven: "AI" };

Object.setPrototypeOf(tesla, genericCar); // Right to left mtlb genericCar ki saari properties tesla mn ajayenge tesla can access the properties of generic car

// console.log("tesla", tesla, Object.getPrototypeOf(tesla)); //Object.getPrototypeOf(tesla) is ka mtlb jo properties tesla ko generic car se mili hn wo access getPrototypeOf k throguh hoga
