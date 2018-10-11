//string padding

.padStart();
.padEnd();


//useful with long parameters list
const fun = (a, b, c, d, ) => {
  console.log(a);
}

fun(1, 2, 3, 4, )

Object.values
Object.entries


let obj = {
  username0: 'Santa',
  username1: 'Rudolph',
  username2: 'Grinch'
}

//One way to iterate through object
Object.keys

Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
})

//We can so use arrays fonction like map, filter, map, etc

Object.values(obj).forEach(value => {
  console.log(value);
})

Object.entries(obj).forEach(value => {
  console.log(value);
})

Object.entries(obj).map(value => {
  return value[1] + value[0].replace('username', '');
})