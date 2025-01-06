measureKalvin = () => {
  const measurement = {
    type: "temp",
    unit: "celcius",
    value: Number(prompt("Aapke ke yahan kitna hua temp ;) (in celsius)")),
  };

  const kalvin = measurement.value + 273 + "°" + " " + "Kalvin :D";
  return kalvin;
};

console.log(measureKalvin());
