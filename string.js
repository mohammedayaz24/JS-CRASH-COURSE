const name="Ayaz";
const repoCount=50;

console.log(name +repoCount+ "Value");

//string interpolation
//requires backticks
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gamename= new String("Ayaz");

console.log(gamename[0]);
console.log(gamename[1]);
//methods
console.log(gamename.__proto__);

console.log(gamename.length);//length
console.log(gamename.toUpperCase());//touppererCase
console.log(gamename.toLowerCase());//tolowerCase
console.log(gamename.charAt(2));//to get character at index
console.log(gamename.indexOf("y"));//to get index of character

//substring
console.log("Substring method");
const newString= gamename.substring(0,3);
console.log(newString);

//slice
console.log("Slice method");
const gamename1="abcdefgh";
const newString2= gamename1.slice(-6,-4);
console.log(newString2);

//trim
console.log("Trim method");
const gamename2="     Ayaz     ";
console.log(gamename2);
console.log(gamename2.trim());
console.log(gamename2.trimStart());
console.log(gamename2.trimEnd());

//replace
console.log("Replace method");
const url="www.ayaz.com";
console.log(url.replace("com","in"));

//includes
console.log("Includes method");
const gamename3="Ayaz";
console.log(gamename3.includes("y"));

//split
console.log("Split method");
const gamename4="Ayaz-Ahmed-Khan";
console.log(gamename4.split("-"));