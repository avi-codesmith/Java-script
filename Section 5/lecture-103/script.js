"use strict";

if (true) {
  let x = 5;
  const y = 15;
  var z = 25;
}

// console.log(x); //error
// console.log(y); //error
console.log(z);

function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter1 = outer();
counter1(); //1
counter1(); //2

const counter2 = outer();
counter2(); //1
counter2(); //2

function createCounter(start) {
  return {
    increment: function () {
      start++;
      console.log(start);
    },
    decrement: function () {
      start--;
      console.log(start);
    },
  };
}

const counter = createCounter(5);
counter.increment(); //6
counter.increment(); //7
counter.decrement(); //6

// Immediately Invoked Function Expression

(function () {
  var x = 10;
})();

//console.log(x); // error

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

const func = () => {
  console.log(b);
};

var b = 10;
func();

const changeBtn = document.createElement("button");
const body = document.querySelector("body");
const colors = ["orange"];
body.appendChild(changeBtn);
changeBtn.innerHTML = colors[0];

const change = (color) => {
  body.style.backgroundColor = `${color}`;
};

changeBtn.addEventListener("click", () => {
  change(colors[0]);
});
