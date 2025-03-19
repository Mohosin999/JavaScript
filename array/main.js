/**
 * push() method
 */

const arr1 = [1, 2];
arr1.push(3);

const pushArr = (array, ...elements) => {
  for (const element of elements) {
    array[array.length] = element;
  }

  return array.length;
};

console.log(pushArr(arr1, 4, 5, 6));
console.log(arr1);

/**
 * pop() method
 */
const arr2 = [1, 2, 3, 4, 5];
