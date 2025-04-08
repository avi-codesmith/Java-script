"use strict";

// const name = "madilta";

const user = {
  name: "jonas",
  year: 1991,
  caclAge: function () {
    console.log(this);
    console.log(2017 - this.year);

    // Solution 1

    const self = this;
    const ismellenial1 = function () {
      if (self.year >= 1981 && self.year <= 1996) {
        console.log("Yes you are!");
      } else {
        console.log("Sorry");
      }
    };

    ismellenial1();

    // solution 2

    const ismellenial2 = () => {
      if (this.year >= 1981 && this.year <= 1996) {
        console.log("Yes you are!");
      } else {
        console.log("Sorry");
      }
    };

    ismellenial2();
  },
  greet: function () {
    console.log(this);
    console.log(this.name);
  },
};

user.caclAge();
user.greet();

// console.log(this.name);

const AddExpressions = (a, b) => {
  console.log(arguments);
  return a + b;
};

AddExpressions(2, 5, 6, 6);

var addArrow = (a, b) => a + b;
