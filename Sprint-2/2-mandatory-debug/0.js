// Predict and explain first...

// =============> write your prediction here

// I think the program will not throw an error and it will just display the ouput 

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// console.log only display a value and does not return it back to the caller so it returns undefined so we need to use return because we want it to return a value that we can use the template literal. 

// Finally, correct the code to fix the problem
//  =============> write your new code here


function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
