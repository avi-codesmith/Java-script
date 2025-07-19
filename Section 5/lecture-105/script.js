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

const ans1 = addNum(1, 2);
console.log(ans1);

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

const apiUser = [1, 2, 3];
const apiUser2 = [1, 2, 3];

if (apiUser === apiUser2) {
  console.log(typeof apiUser);
  console.log("hi it's here");
} else {
  console.log("NO ");
  console.log(typeof apiUser);
}

let va1;

va1 = undefined ?? 50 ?? 60;

console.log(va1);

const computer = false;

computer ? console.log("yes") : console.log("nhi hai");

for (let i = 1; i <= 1000; i++) {
  console.log(`${i}. English Work snd kr d`);
  // console.log(i * i);
  // for (let a = 1; a <= 10; a++) {
  // console.log(`inner loop value ${a}`);
  // }
}

console.log("hi");

const forOfArr = {
  name: "avi",
  class: "ravi",
};

for (const key in forOfArr) {
  console.log(key, forOfArr[key]);
}

const map = new Map();

map.set("name", "avi");
map.set("avi");
map.set("name", "avi");
console.log(map.has("avi"));
console.log(map);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const forEach = array.forEach((e) => {
  return console.log(e);
});

// console.log(forEach);

const filter = array.filter((e) => {
  return e > 4;
});

console.log(filter);

const myNums = [];

array.forEach((e) => {
  if (e > 4) {
    console.log(e);
    myNums.push(e);
  }
});

console.log(myNums);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const bigNum = numbers.map((e) => (e = 5));

console.log(bigNum);

const bill = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ans = bill.reduce((acc, currval) => {
  console.log(`acc: ${acc}; currval: ${currval}`);
  return acc + currval;
}, 0);

console.log(ans);

const addOptionLang = (name) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(name));
  document.querySelector("ul").appendChild(li);
};

addOptionLang("Javascrpit");
addOptionLang("Python");
addOptionLang("Mongo DB");
addOptionLang("Ruby");

const secondLi = document.querySelector("li:nth-child(2)");
const newLi = document.createElement("li");
newLi.appendChild(document.createTextNode("Changed"));
secondLi.replaceWith(newLi);

const firstElement = document.querySelector("li:first-child");
firstElement.outerHTML = `<li>TypeScript</li>`;

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const body = document.querySelector("body");
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.top = `${e.clientY}px`;
    div.style.left = `${e.clientX}px`;
    body.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 1000);
  }
});

console.log("Hi");

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "avi", course: "cahi" });
  }, 1000);
});

promise2.then((data) => {
  console.log(data);
});

promise2.catch((error) => {
  console.log(error);
});
