"use strict";

let promise = new Promise((resolve, reject) => {
  alert("I am a promise");
});

console.log("hello 1");
setTimeout(() => {
  console.log("hello 2sec");
}, 2000);

console.log("hello 3");
