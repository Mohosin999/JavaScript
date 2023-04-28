// console.log('a' > 'A')
// small alphabet always getter than capital alphabet
// a is smaller than b, b is smaller than c .....

// concat()
const a = "Mohosin Hasan";
const b = "Akash";

const c = a.concat(" ", b);
console.log(c); // Mohosin Hasan Akash

// we need the middle part of this name 'Hasan'
const d = "Mohosin Hasan Akash";
const e = d.substring(8, 13);

console.log(e);

// charAt()
console.log(d.charAt(14));

// To skip space use trim()
const f = "   Hello Space   ";
console.log(f.trim());

// split()
const g = "My name is Mohosin Hasan Akash";
const h = g.split(" ");
console.log(h); // [ 'My', 'name', 'is', 'Mohosin', 'Hasan', 'Akash' ]
