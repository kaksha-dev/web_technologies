// Sets
// Collection of values as an array but enforces uniqueness
// Can be looped over
// Elements can be accessed individually
// Add items can be done
// Remove items can be done
// .size instead of .length
// .has() to check if an item is present
// .values() or .keys() to get all the values
// .clear() method to remove all key-value
// Maps
// Collection key-value pairs like Object (key, value) and not as (key: value)
// Both the keys and the values can be objects, primitive values, or a combination of the two.
// Add elements using .set method
// Delete using .delete
// employees.set('james.parkes@udacity.com', { 
// firstName: 'James’,
// lastName: 'Parkes',
// role: 'Content Developer' 
// });
// .clear() method to remove all key-value



/**
 * Entries in js is an array/collection of [key, value] pairs
 * [
 *   [key1, value1]
 *   [key2, value2]
 * ]
 */

// Set a just like an array but collection of unique elements
// Set is an array of unique entrries
var set1 = new Set([1, 2, 3]);
set1.add(1);

// Common operations on set
set1.add(1);
set1.delete(2); // deletes 2 from set
set1.has(3); // returns true if 3 is present in set
set1.size; // returns size of set
set1.clear(); // clears the set
set1.values(); // returns all values in set
set1.keys(); // returns all keys in set (same as values())
set1.entries(); // returns all entries in set as array of [value, value] pairs
set1.forEach((value) => {
  console.log(value);
}); // iterates over all values in set  
set1.forEach(function (value) {
  console.log(value);
}); // iterates over all values in set
set1.forEach(function (value, value2, set) {
  console.log(value, value2, set);
}); // iterates over all values in set with set object as third argument

set1.forEach((value, value2, set) => {
  console.log(value, value2, set); 
}); // iterates over all values in set with set object as third argument
set1.forEach(console.log); // iterates over all values in set with console.log as callback function
set1.forEach(console.log, thisArg); // iterates over all values in set with console.log as callback function and thisArg as this value
// thisArg is optional and can be any value
set1.forEach(function () {
  console.log(this);
}, thisArg); // iterates over all values in set with anonymous function as callback function and thisArg as this value
// thisArg is optional and can be any value
set1.forEach((value) => {
  console.log(this);
}, thisArg); // iterates over all values in set with arrow function as callback function and thisArg as this value
// thisArg is optional and can be any value
set1.forEach(function (value) {
  console.log(this);
}, thisArg); // iterates over all values in set with anonymous function as callback function and thisArg as this value
// thisArg is optional and can be any value
set1.forEach((value, value2, set) => {
  console.log(this);
}, thisArg); // iterates over all values in set with arrow function as callback function and thisArg as this value
// thisArg is optional and can be any value
set1.forEach(function (value, value2, set) {
  console.log(this);
}, thisArg); // iterates over all values in set with anonymous function as callback function and thisArg as this value
// thisArg is optional and can be any value
// set1 is iterable
for (let value of set1) {
  console.log(value);
} // iterates over all values in set with for...of loop
for (let value of set1.values()) {
  console.log(value);
} // iterates over all values in set with for...of loop and values() method
for (let value of set1.keys()) {
  console.log(value);
} // iterates over all values in set with for...of loop and keys() method
for (let [key, value] of set1.entries()) {
  console.log(key, value);
} // iterates over all entries in set with for...of loop and entries() method
for (let value of [...set1]) {
  console.log(value);
} // iterates over all values in set with for...of loop and spread operator
for (let value of Array.from(set1)) {
  console.log(value);
} // iterates over all values in set with for...of loop and Array.from() method 
for (let value of Array.from(set1.values())) {
  console.log(value);
} // iterates over all values in set with for...of loop and Array.from() method and values() method

/**
 * Map is just like an object but with keys ne of any type
 * as opposed to an object where ket has to be of type string
 */
var map1 = new Map([
  ["name", "name1"],
  ["name", "name2"],
  ["name", "name3"],
]);

map1.set([["name", "name1"]]);

// Common operations on set
map1.set("name", "name1"); // adds key value pair to map
map1.get("name"); // returns value for key "name"
map1.delete("name"); // deletes key "name" from map
map1.has("name"); // returns true if key "name" is present in map
map1.size; // returns size of map
map1.clear(); // clears the map
map1.keys(); // returns all keys in map
map1.values(); // returns all values in map
map1.entries(); // returns all entries in map as array of [key, value] pairs
map1.forEach((value, key) => {
  console.log(key, value);
}); // iterates over all entries in map
map1.forEach(function (value, key) {
  console.log(key, value);
}); // iterates over all entries in map
map1.forEach(function (value, key, map) {
  console.log(key, value, map);
}); // iterates over all entries in map with map object as third argument
map1.forEach((value, key, map) => {
  console.log(key, value, map);
}); // iterates over all entries in map with map object as third argument
map1.forEach(console.log); // iterates over all entries in map with console.log as callback function
map1.forEach(console.log, thisArg); // iterates over all entries in map with console.log as callback function and thisArg as this value
// thisArg is optional and can be any value
map1.forEach(function () {
  console.log(this);
}, thisArg); // iterates over all entries in map with anonymous function as callback function and thisArg as this value
// thisArg is optional and can be any value
map1.forEach((value, key) => {
  console.log(this);
}, thisArg); // iterates over all entries in map with arrow function as callback function and thisArg as this value
// thisArg is optional and can be any value
map1.forEach(function (value, key) {
  console.log(this);
}, thisArg); // iterates over all entries in map with anonymous function as callback function and thisArg as this value
// thisArg is optional and can be any value
map1.forEach((value, key, map) => {
  console.log(this);
}, thisArg); // iterates over all entries in map with arrow function as callback function and thisArg as this value
// thisArg is optional and can be any value
map1.forEach(function (value, key, map) {
  console.log(this);
}, thisArg); // iterates over all entries in map with anonymous function as callback function and thisArg as this value
// thisArg is optional and can be any value
// map1 is iterable
for (let [key, value] of map1) {
  console.log(key, value);
} // iterates over all entries in map with for...of loop
for (let [key, value] of map1.entries()) {
  console.log(key, value);
} // iterates over all entries in map with for...of loop and entries() method
for (let key of map1.keys()) {
  console.log(key);
} // iterates over all keys in map with for...of loop and keys() method
for (let value of map1.values()) {
  console.log(value);
} // iterates over all values in map with for...of loop and values() method
for (let [key, value] of [...map1]) {
  console.log(key, value);
} // iterates over all entries in map with for...of loop and spread operator
for (let [key, value] of Array.from(map1)) {
  console.log(key, value);
} // iterates over all entries in map with for...of loop and Array.from() method
for (let [key, value] of Array.from(map1.entries())) {
  console.log(key, value);
} // iterates over all entries in map with for...of loop and Array.from() method and entries() method
for (let key of Array.from(map1.keys())) {
  console.log(key);
} // iterates over all keys in map with for...of loop and Array.from() method and keys() method
for (let value of Array.from(map1.values())) {
  console.log(value);
} // iterates over all values in map with for...of loop and Array.from() method and values() method
for (let i = 0; i < map1.size; i++) {
  let key = Array.from(map1.keys())[i];
  let value = map1.get(key);
  console.log(key, value);
} // iterates over all entries in map with for loop and Array.from() method and keys() method and get() method
for (let i = 0; i < map1.size; i++) {
  let key = [...map1.keys()][i];
  let value = map1.get(key);
  console.log(key, value);
} // iterates over all entries in map with for loop and spread operator and keys() method and get() method
for (let i = 0; i < map1.size; i++) {
  let key = Array.from(map1)[i][0];
  let value = Array.from(map1)[i][1];
  console.log(key, value);
} // iterates over all entries in map with for loop and Array.from() method
for (let i = 0; i < map1.size; i++) {
  let key = [...map1][i][0];
  let value = [...map1][i][1];
  console.log(key, value);
} // iterates over all entries in map with for loop and spread operator
for (let i = 0; i < map1.size; i++) {
  let key = map1.keys().next().value;
  let value = map1.get(key);
  console.log(key, value);
} // iterates over all entries in map with for loop and keys() method and get() method
for (let i = 0; i < map1.size; i++) {
  let key = map1.values().next().value;
  let value = map1.get(key);
  console.log(key, value);
} // iterates over all entries in map with for loop and values() method and get() method
for (let i = 0; i < map1.size; i++) {
  let entry = map1.entries().next().value;
  let key = entry[0];
  let value = entry[1];
  console.log(key, value);
} // iterates over all entries in map with for loop and entries() method
for (let i = 0; i < map1.size; i++) {
  let entry = map1.entries().next().value;
  let key = entry[0];
  let value = map1.get(key);
  console.log(key, value);
} // iterates over all entries in map with for loop and entries() method and get() method
for (let [key, value] of map1) {
  if (key === "name") {
    console.log("Found name:", value);
    break;
  }
} // iterates over all entries in map with for...of loop and breaks when key is "name"

for (let [key, value] of map1) {
  if (key === "name") {
    console.log("Found name:", value);
    continue;
  }
  console
    .log("Key is not name, key is:", key, "value is:", value);
} // iterates over all entries in map with for...of loop and continues when key is "name"
// forEach with break and continue is not possible
map1.forEach((value, key) => {
  if (key === "name") {
    console.log("Found name:", value);
    return; // this will act like continue
  }
  console.log("Key is not name, key is:", key, "value is:", value);
} // iterates over all entries in map with forEach and continues when key is "name"
);
map1.forEach((value, key) => {
  if (key === "name") {
    console.log("Found name:", value);
    // no way to break from forEach
  }
  console.log("Key is not name, key is:", key, "value is:", value);
} // iterates over all entries in map with forEach and tries to break when key is "name"
);
// forEach with break and continue is not possible
// map1 is iterable
