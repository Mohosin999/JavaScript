const arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < arr.length / 2; i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}

console.log(arr);

// builtin method

const arr1 = [10, 20, 30, 40, 50];
console.log(arr1.reverse()); // [ 50, 40, 30, 20, 10 ]
