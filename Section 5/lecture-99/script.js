"use strict";

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArr = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArr(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const ravaka = {
  year: 2017,
};

ravaka.calcAge = jonas.calcAge;

const f = jonas.calcAge;
f();
