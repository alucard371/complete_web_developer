//Beware of the memory heap
//Global variables are bad because of they fill the memory heap and it's easy to forget them
const a = 1;
const b = 10;
const c = 100;

//call stack
console.log('1');
console.log('2');
console.log('3');

const one = () => {
  const two = () => {
    console.log('4');
  }
  two();
}

//call stack
console.log('4');
two();
one();

//single-threaded means that there is just one call stack, you can only do one thing at a time
//First in, last out

//create a stack overflow

//recursion
//a function that call itself
function foo() {
  foo()
}

foo()