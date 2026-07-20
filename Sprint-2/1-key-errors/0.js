// Predict and explain first...
//  =============> write your prediction here

// I think the code will not run and JS will throw an error because the variable Str is declared twice

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here

// I will use a different variable name and then run the code to see if it works 


// write your new code here

function capitalise(str) {
  let capitalised = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalised;
}
