let value=3;
let negvalue= -value;
console.log(negvalue);

console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(10 / 2);
console.log(10 % 3);
console.log("-------------------")


//contatination
let str1="hello";
let str2="  world";
let str3=str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");

//it uses toPrimitive for operands

let gameCounter=100;
++gameCounter;
console.log(gameCounter);
console.log("-------------------")


//comaparison

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);
console.log("-------------------")


console.log("2" > 1);
console.log("01" == 1);
console.log("-------------------")

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//null is only equal to undefined and not to any other value
console.log("-------------------")
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
//undefined is only equal to null and not to any other value
console.log("-------------------")

//strict equality
console.log(0 === false);
console.log(0 == false);