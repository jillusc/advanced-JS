/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    return a + b;
}

let sum = addTwoNumbers(5, 3);
console.log(sum)


// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    return a + b;
}

let sum = addTwoNumbers(4, 3);
console.log(sum)


// Single Line Arrow Function With Parameters
const addTwoNumbers = (a, b) => a + b;
let sum = addTwoNumbers(4, 3);
console.log(sum)


// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello World!');

const sayHello = () => console.log('Hello');

// Or
const returnSingleLine = () => 'This is a single-line string';


// Returning Multiple Lines - IMplicit
const returnMultipleLines = () => (
    `<p>
      "This is a multiline string."
    </p>`
)
// Returning Multiple Lines - EXplicit
const returnMultipleLinesExplicit = () => {
    return (
      `<p>
        "This is a multiline string."
      </p>`
    );
  };








