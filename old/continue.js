for (let i = 0; i <= 10; i++) {
  if (i === 6 || i === 9) {
    continue;
  } else {
    console.log(i);
  }
}

// the result is:
// 1
// 2
// 3
// 4
// 5
// 7
// 8
// 10
