console.log(me);
console.log(job);
console.log(year);

var me = "jonas";
let job = "teacher";
const year = 1991;

// In functions

console.log(funcDel(1, 2));
console.log(funcEx(1, 2));
console.log(funcExArrow(1, 2));

function funcDel(a, b) {
  return a + b;
}

const funcEx = function (a, b) {
  return a + b;
};

const funcExArrow = (a, b) => a + b;

// Example

if (!totalCart) {
  deleteShopCart();
}

var totalCart = 10;

function deleteShopCart() {
  console.log("All have gone!");
}

var x = 10;
let y = 10;
const z = 10;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

function startTimer() {
  console.log("Timer started");

  setTimeout(() => {
    console.log(message); // This will be in the TDZ if accessed before initialization
  }, 1000);

  let message = "Hello after 1 second";
}

startTimer();
