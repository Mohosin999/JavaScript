// Type - 01
const personName = "Mohosin Hasan Akash";
const personAge = 14;

const output = `My name is ${personName}. I am ${personAge} years old. So i am ${
  personAge < 18 ? "not " : ""
}Adult.`;

console.log(output);

// Type - 02
const name1 = "My name is Mohosin. ";
const repeatName = name1.repeat(3);

console.log(repeatName);
// ans: My name is Mohosin. My name is Mohosin. My name is Mohosin.

// Type - 03
const name2 = "Akash";

console.log(name2.padStart(10, "H")); // HHHHHAkash
console.log(name2.padEnd(10, "a")); // Akashaaaaa

// Type - 04 - trim() / includes()
