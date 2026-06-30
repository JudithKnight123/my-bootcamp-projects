// 1. Object.keys() - Returns an array of an object's own enumerable property names
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};
console.log("Keys:", Object.keys(person)); // ["name", "age", "city"]

// 2. Object.values() - Returns an array of an object's own enumerable property values
console.log("Values:", Object.values(person)); // ["Alice", 30, "New York"]

// 3. Array.push() - Adds elements to the end of an array and returns the new length
const fruits = ["apple", "banana"];
fruits.push("orange");
console.log("After push:", fruits); // ["apple", "banana", "orange"]

// 4. Array.pop() - Removes the last element from an array and returns that element
let poppedFruit = fruits.pop();
console.log("After pop:", fruits); // ["apple", "banana"]
console.log("Popped fruit:", poppedFruit); // "orange"

// 5. Array.shift() - Removes the first element from an array and returns that element
let shiftedFruit = fruits.shift();
console.log("After shift:", fruits); // ["banana"]
console.log("Shifted fruit:", shiftedFruit); // "apple"

// 6. Array.concat() - Merges two or more arrays and returns a new array
let vegetables = ["carrot", "potato"];
let food = fruits.concat(vegetables);
console.log("After concat:", food); // ["banana", "carrot", "potato"]

// 7. Array.indexOf() - Returns the first index of a specified element, or -1 if not found
let index = food.indexOf("banana");
console.log("Index of banana:", index); // 0

// 8. Array.includes() - Determines if an array contains a certain value
let hasBanana = food.includes("banana");
console.log("Array contains banana:", hasBanana); // true

// 9. Array.filter() - Creates a new array with all elements that pass the test
let longFoods = food.filter((item) => item.length > 5);
console.log("Foods with more than 5 letters:", longFoods); // ["banana", "carrot", "potato"]