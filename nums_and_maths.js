const score = 100;

const balance = new Number(1000);

console.log(score);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 42.56789;

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;

console.log(hundreds.toLocaleString());//us by default
console.log(hundreds.toLocaleString("de-IN"));

//+++++++++++++++++++maths+++++++++++++++++++++++
console.log("Maths");

console.log(Math);//object

console.log(Math.PI);//PI
console.log(Math.E);//Euler's number
console.log(Math.SQRT2);

console.log(Math.abs(-4));//absolute value
console.log("Round method",Math.round(4.6));//round to nearest integer
console.log("Floor method",Math.floor(4.6));//round down
console.log("Ceil method",Math.ceil(4.2));//round up

//random number
console.log(Math.floor(Math.random() * 10) + 1);//0-10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);