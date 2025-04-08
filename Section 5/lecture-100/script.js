"use strict";

// const name = "madilta";

const user = {
  name: "jonas",
  year: 1991,
  caclAge: function () {
    console.log(this);
    console.log(2017 - this.year);

    const self = this;
    const ismellenial = function () {
      if (self.year >= 1981 && self.year <= 1996) {
        console.log("Yes you are!");
      } else {
        console.log("Sorry");
      }
    };
    ismellenial();
  },
  greet: function () {
    console.log(this);
    console.log(this.name);
  },
};

user.caclAge();
user.greet();

// console.log(this.name);
