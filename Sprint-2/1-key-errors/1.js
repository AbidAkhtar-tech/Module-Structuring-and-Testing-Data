// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here *  The program will not run. It will throw an error before console.log() executes.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// write your explanation here

// A function parameter is already a variable, so you cannot declare another const with the same name.

// Variables declared as function parameters are only available inside that function. They are not visible outside because they are in a different scope.  

// JavaScript doesn't allow two variables with the same name in the same scope, so it throws an error before the program runs.


// Finally, correct the code to fix the problem
// =============> write your new code here


function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.9));

