const jonas = {
  firstName: "Jonas",
  lastName: "Sachman",
  birthYear: 1991,
  job: "Teacher",
  friends: ["Ravi", "Rohit", "Rahul"],
  hasDrivingLicense: false,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.age}-years old ${
      this.job
    }, and he has ${this.hasDrivingLicense ? "a" : "no"} driving lincense.`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);

console.log(jonas.getSummary());
