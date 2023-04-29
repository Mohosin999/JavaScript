// How programming language store data ?
// - Which system store data in JS it's called scope

const x = 50;

function test() {
  const x = 55;
  console.log(x); // result - 55
}

test();
