let score="33aaa";//number

console.log(typeof score);
console.log(typeof(score));


let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33aa"=>NaN
//we have to be careful while converting a string to a number

//null=>0
//undefined=>NaN
//boolean=>true=>1,
// false=>0
//string=>"33"=>33

let IsloggedIn="";

let booleanisLoggedIn=Boolean(IsloggedIn);
console.log(booleanisLoggedIn);

//1=>true
//0=>false
//"hi"=true
//""=>false

let someNumber=33;
let stringNumber=String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


