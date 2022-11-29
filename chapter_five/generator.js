// generator

const obj = {
  start: 1,
  ends: 5,

  [Symbol.iterator]: function* () {
    let currentValue = this.start;
    while (currentValue <= this.ends) {
      yield currentValue++;
    }
  },
};

const iterate = obj[Symbol.iterator]();

console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());

// ans:
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: 5, done: false }
// { value: undefined, done: true }
