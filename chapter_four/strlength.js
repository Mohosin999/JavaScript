// string length
const str = "I am a JavaScript Developer";

let length = 0;

while (true) {
  if (str.charAt(length) == "") {
    break;
  } else {
    length++;
  }
}

console.log(length); // 27

// builtin method
const length1 = str.length;
console.log(length1);
