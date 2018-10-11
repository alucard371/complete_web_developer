// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

startLine
turtle = turtle.padStart(9)
rabbit = rabbit.padStart(9)
// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtleT = turtle.trim().padStart(10, '=');


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

Object.entries(obj).forEach(value => {
  console.log(value);
})

//Join turns array into a string
Object.entries(obj).map(value => value.join(" ")).join(" ");

// to this:
'my name is Rudolf the raindeer'