// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};



const {
  firstName,
  lastName,
  age,
  eyeColor
} = person;


// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = {
  a,
  b,
  c
};


// Template strings

const firstName = "quentin";
const city = "tours";

//Beware of the syntax

const message = `Hello  + ${firstName} have I met you before? I think we met in ${city} last summer no???`


// default arguments
// default age to 10;
function isValidAge(age = 37) {
  return age
}

// or
const isValidAge = (age = 10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"
const symbol = Symbol('This is my first Symbol');

// Arrow functions
function whereAmI(username, town) {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
}

const whereAmI = (username, town) => (username && town) ? "I am not lost" : "I am totally lost !";


//beware of the scope, the child scope always have access to the child scope
//Closures
const first = () => {
  const greet = 'hi';
  const second = () => {
    alert(greet);
  }
  return second;
}

const newFunc = first();
newFunc();


//Currying
const multiply = (a, n) => a * b;
const curriedMultiply = (a) => (b) => a * b;

curriedMultiply(3);

curriedMultiply(3)(7);
const multiplyByFive = curriedMultiply(5);
multiplyByFive(5);

//compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

//avoiding side effects, functional purity
//Look for 'Determinism'