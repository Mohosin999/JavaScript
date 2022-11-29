// how to hide draw or radius ?
// there has two solution - Symbol & WeakMap

// Symbol
const _radius = Symbol();
const _name = Symbol();

class Circle {
  constructor(radius, name) {
    this[_radius] = radius; // now radius goes to hidden
    this[_name] = name; // now name goes to hidden
  }

  draw() {
    console.log("drawing...");
  }
}

const c1 = new Circle(2, "Private");

const key = Object.getOwnPropertySymbols(c1)[0]; // not good solution to get property
console.log(c1[key]);

// WeakMap
const _radius1 = new WeakMap();
const _name1 = new WeakMap();
const _resize = new WeakMap();

class Circle {
  constructor(radius, name) {
    this.size = 100;
    _radius.set(this, radius);
    _name.set(this, name);
    _resize.set(this, () => {
      console.log(this.size);
    });
  }

  draw() {
    console.log("drawing...");
    console.log(_radius.get(this), _name.get(this));
    _resize.get(this)();
  }
}

let c2 = new Circle(2, "Private");
c2.draw();
