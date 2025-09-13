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
