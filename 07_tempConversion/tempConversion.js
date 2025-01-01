const convertToCelsius = function(tempInF) {
  let temp = (tempInF - 32) * 5/9;

  return parseFloat(temp.toFixed(1));
};

const convertToFahrenheit = function(tempInC) {
  let temp = (tempInC * 9/5) + 32;

  return parseFloat(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
