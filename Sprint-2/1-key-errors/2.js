
// Predict and explain first BEFORE you run any code...

// My prediction is that the program will not run because of the number 3.

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

// The program will not run because JavaScript will throw a SyntaxError when it reads the function declaration.

function square(3) {
    return num * num;
}

// =============> write the error message here       

// SyntaxError: Unexpected number 

// =============> explain this error message here

// Unexpected error means JavaScript expected a parameter name but found the number 3 instead.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}

console.log(square(3));
