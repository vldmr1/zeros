module.exports = function getZerosCount(number) {
  let numOfZeros = 0,
      n = 1;
  while (Math.floor(number / 5**n >= 1)) {
    numOfZeros += Math.floor(number / 5**n);
    n++;
  }  
  return numOfZeros;
}
