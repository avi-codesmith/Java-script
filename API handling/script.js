"use strict";

const api = fetch("https://goweather.xyz/weather/ykty");

api
  .then((a) => {
    console.log(a.status);
    console.log(a.ok);

    return a.json();
  })
  .then((a) => {
    console.log(a);
  })
  .catch(() => {
    console.log("error");
  });

const numbers = [10, 20, 30];

// Traditional way:
let first = numbers[0];
let second = numbers[1];

// Destructuring way:
const [a, b] = numbers;

console.log(a); // 10
console.log(b); // 20

const [x, , z] = numbers;
console.log(z); // 30
