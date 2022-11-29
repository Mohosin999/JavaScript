// Type 01 - print your name as many you want
function myName(n) {
  if (n === 0) {
    return;
  }
  console.log("Mohosin Hasan Akash");
  myName(n - 1);
}

myName(5);

// Type 02 - sum few numbers
function sum(n) {
  if (n === 1) {
    return 1;
  }

  return n + sum(n - 1);
}

console.log(sum(5));

// Type 03 - factorial (5!)
function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));

// Type 04 - array sum
const arr = [1, 2, 3, 4, 5, 6];

function sumOfArray(arr, lastIndex) {
  if (lastIndex < 0) {
    return 0;
  }

  return arr[lastIndex] + sumOfArray(arr, lastIndex - 1);
}

console.log(sumOfArray(arr, arr.length - 1));
