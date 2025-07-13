"use strict";

const sym = Symbol("random1");

const custumer = {
  name: "avi",
  class: 9,
  rollno: 35,
  [sym]: "random",
};

// const greeting = (custumer.greeting = () => {
//   console.log("Are you going well?");
// });

// console.log(greeting());

custumer.name = "simpy";
Object.freeze(custumer);

// custumer.name = "bhisuraam"; // give error is strict mode

console.log(custumer);
