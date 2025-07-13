"use strict";

let promise = new Promise((resolve, reject) => {
  // alert("I am a promise");
});

console.log("hello 1");
setTimeout(() => {
  console.log("hello 2sec");
}, 2000);

console.log("hello 3");

const user = {
  name: "avi",
  fullname: "ravi",
  address: {
    state: "U.P",
    city: "firozabad",
  },
  number: 9045873902,
};

const user2 = {
  Aname: "avi",
  Afullname: "ravi",
  Aaddress: {
    Astate: "U.P",
    Acity: "firozabad",
  },
  Anumber: 9045873902,
};

// const user2 = "hitesh";

const userW = { ...user, ...user2 };
console.log(userW);

console.log(Object.keys(user).length);
console.log(Object.values(user).length);
console.log(Object.entries(user));
console.log(user.hasOwnProperty("name"));

const { name: n } = user;

console.log(n);

const addNum = (a, b) => {
  return a + b;
};

const ans = addNum(1, 2);
console.log(ans);

console.log(this);

const chai = () => {
  const username = "avi";
  console.log(this.username);
};

chai();

const obj = (n1, n2) => ({ hi: "public" });

obj(1, 2);

const currmonth = 7;

switch (currmonth) {
  case "7":
    console.log("String july");
    break;
  case 7:
    console.log("Number july");
    break;
  default:
    console.log("default");
}
