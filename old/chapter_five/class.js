class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  draw() {
    console.log("drawing...");
  }
}

const rect1 = new Rectangle(20, 10, "Mohosin");

console.log(rect1);
console.log(typeof Rectangle); // function
console.log(typeof rect1); // object - only for new keyword
