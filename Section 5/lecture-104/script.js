"use strict";

function newFunc() {
  const variable = "x";
  function innerFunc() {
    console.log(variable);
  }
  innerFunc();
}

newFunc();

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "avi", course: "cahi" });
  }, 1000);
});

promise2.then((data) => {
  console.log(data);
});

promise2.catch((error) => {
  console.log(error);
});
