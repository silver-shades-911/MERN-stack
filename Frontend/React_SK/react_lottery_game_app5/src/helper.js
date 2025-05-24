// Array with random digits generator Logic
function arrayDigitGenerator(n) {
  let digitArray = new Array(n);

  for (let i = 0; i <= n; i++) {
    digitArray[i] = Math.floor(Math.random() * 10);
  }

  return digitArray;
}

// Sum logic
function digitSum(array) {
  let sum = array.reduce((sum, currDigit) => sum + currDigit, 0);
  console.log(sum);
  return (sum);
}

export { arrayDigitGenerator, digitSum };
