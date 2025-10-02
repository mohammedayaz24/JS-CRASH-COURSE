console.log("Dates");

const now = new Date();
console.log(now.toString());
console.log(now.toDateString());
console.log(now.toISOString());
console.log(now.toJSON());
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());

console.log(typeof now);//object

//specific date
const mydate = new Date(2024,8,23,18,20,56);//month is 0 based
//year, month, day, hours, minutes, seconds, milliseconds
console.log(mydate.toString());
console.log(mydate.toLocaleString());

//specific date format
//month is 1 based
const mydate2 = new Date("2024-09-23T18:20:56");
console.log(mydate2.toString());
console.log(mydate2.toLocaleString());


//timestamp
let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(Math.floor(myTimestamp/1000));//milliseconds to seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);//0 based
console.log(newDate.getDate());
console.log(newDate.getFullYear());

console.log(newDate.toLocaleString(`default`, { month: 'long' }));//full month name
console.log(newDate.toLocaleString(`default`, { month: 'short' }));//short month name


