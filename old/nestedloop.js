// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

const n = 5;

for (let i = 1; i <= n; i++) {
  let result = "";
  for (let j = 1; j <= i; j++) {
    result += j + " ";
  }
  console.log(result);
}

// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *

const m = 6;

for (let i = 1; i <= m; i++) {
  let result = "";
  for (let j = 1; j <= m; j++) {
    result += "* ";
  }
  console.log(result);
}
