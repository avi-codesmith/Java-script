calcTempAltitude = (temps) => {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps.i !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }

  console.log(max);
  console.log(min);
};

calcTempAltitude([1, 9, 2, 3, 4]);
