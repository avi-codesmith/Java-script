"use strict";

const calcAge = function (birthYear) {
  const apple = "company";
  console.log(apple);
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArr = (birthYear) => {
  console.log(2037 - birthYear);
  console.log("arrr", this);
};
calcAgeArr(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year, "year");
  },
};

jonas.calcAge(50);

const ravaka = {
  year: 2017,
};

ravaka.calcAge = jonas.calcAge;

const f = jonas.calcAge;
f();
ravaka.calcAge();
