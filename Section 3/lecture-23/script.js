const calcAge = function (year) {
  return 2037 - year;
};

const yrsUntillRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} You haave to do job :|`);
    return retirement;
  } else {
    console.log(`${firstName} You may retire :)`);
    return -1;
  }
  // return `${firstName} retires in ${retirement}`;
};
console.log(yrsUntillRetirement(1991, "Jonas"));
console.log(yrsUntillRetirement(1961, "Mohit"));
