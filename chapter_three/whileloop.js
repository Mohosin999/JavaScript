// if condition is true, while loop is running

let n = 0;

while (n < 10) {
  console.log("Mohosin Hasan Akash");
  n++;
}

// Important Example

let isRunning = true;

while (isRunning) {
  const rand = Math.floor(Math.random() * 10 + 1);
  if (rand === 9) {
    console.log("Winner Winner Chicken Dinner");
    isRunning = false;
  } else {
    console.log("You have got " + rand);
  }
}
