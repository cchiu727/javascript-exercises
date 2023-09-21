const convertToCelsius = function(fahr) {
  let cels = (fahr - 32) * (5 / 9);
  return Math.round(cels * 10) / 10; // round to 1 decimal place
};

const convertToFahrenheit = function(cels) {
  let fahr = (cels * (9 / 5)) + 32;
  return Math.round(fahr * 10) / 10; // round to 1 decimal place
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
