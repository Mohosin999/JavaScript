function nameA(name1) {
  return function (name2) {
    return function (name3) {
      return (
        name1 + ", " + name2 + ", " + "and " + name3 + " are three friends"
      );
    };
  };
}

const finalResult = nameA("Akash")("Rasel")("Robi");
console.log(finalResult);
