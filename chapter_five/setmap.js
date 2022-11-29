// Set constructor
let set = new Set([1, 2, 3, 4]);
set.add(5);
set.add(6);
// set.--- others method

console.log(set);
console.log(set.has(5)); // true

// Map constructor - key value pair
let map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

// map.--- others method

console.log(map);
console.log(map.keys()); // [Map Iterator] { 'a', 'b', 'c' }
console.log(map.values()); // [Map Iterator] { 1, 2, 3 }

// really map keys or values are Iterator ??
// let's check it -

let mapIterate = map.keys();
console.log(mapIterate.next()); // { value: 'a', done: false }
// map.values() same

/**
 * WeakSet
 * WeakMap
 */

let a = { a: "4" },
  b = { b: "5" };

// let weakMap = new WeakMap(["you can store here only object"]);
let weakSet = new WeakSet([a, b]);

b = null;

console.log(weakSet);
console.log(weakSet.has(a)); // true
console.log(weakSet.has(b)); // false

// WeakMap - key value pair
