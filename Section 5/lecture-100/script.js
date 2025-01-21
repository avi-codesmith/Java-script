const jonas = {
  firstName: "jonas",
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    // Solution 1
    // const self = this;
    // const ismillenial = function () {
    //   console.log(this);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // ismillenial();

    const ismillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    ismillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

const addEpx = function (a, b) {
  console.log(arguments);
  return 2 + 5;
};
addEpx(2, 5);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
