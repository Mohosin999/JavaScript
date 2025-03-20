const arr = [1, 2, 3, 4, 5];

/**
 * push() method
 */

// const arr1 = [1, 2];
// arr1.push(3);

// const pushArr = (array, ...elements) => {
//   for (const element of elements) {
//     array[array.length] = element;
//   }

//   return array.length;
// };

// console.log(pushArr(arr1, 4, 5, 6));
// console.log(arr1);

/**
 * pop() method
 */
// const arr = [1, 2, 3, 4, 5];
// // arr2.pop();

// const popArr = (array) => {
//   if (array.length === 0) return undefined;
//   const lastElement = array[array.length - 1];

//   array.length = arr.length - 1;
//   return lastElement;
// };

// popArr(arr);
// popArr(arr);
// popArr(arr);
// console.log(arr); // [1, 2]

/**
 * shift() method
 */
// arr.shift();

// const shiftArr = (array) => {
//   if (array.length === 0) return undefined;
//   const firstItem = array[0];

//   // re-indexing
//   for (let i = 0; i < array.length - 1; i++) {
//     array[i] = array[i + 1];
//   }

//   array.length = array.length - 1;
//   return firstItem;
// };

// console.log(shiftArr(arr));

/**
 * unshift() method
 */
// arr.unshift(10);

// const unshiftArr = (array, ...elements) => {
//   for (let i = array.length - 1; i >= 0; i--) {
//     array[i + elements.length] = array[i];
//   }
//   for (let i = 0; i < elements.length; i++) {
//     array[i] = elements[i];
//   }
//   return array.length;
// };

// console.log(unshiftArr(arr, 10, 20));

/**
 * concat() method
 */
const arr1 = [6, 7];
const arr2 = [8, 9, 10];
// console.log(arr.concat(arr1, arr2));

const concatArr = (array, ...arrays) => {
  const newArr = [...array];
  for (const arr of arrays) {
    for (const element of arr) {
      newArr.push(element);
    }
  }
  return newArr;
};

console.log(concatArr(arr, arr1, arr2));
