//original function
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce((a, b) => a.concat(b), []);

//for debugging purpose
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce((accumulator, array) => {
  console.log('array', array);
  console.log('accumulator', accumulator);
  return accumulator.concat(array);
}, []);

//another function for debbuging
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce((accumulator, array) => {
  debugger;
  return accumulator.concat(array);
}, []);