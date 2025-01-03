const friends = ["ravi", "rohit", "goswami"];
console.log(friends.push("bakvas"));
console.log(friends);

friends.unshift("tulsidas");
console.log(friends);

friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("rohit"));

console.log(friends.includes("rohit"));
