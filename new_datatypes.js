//primitive data types
//7 types

//1. number

const score=100;
const scoreValue=100.5;

//2. string

const userName="Ayaz";

//3. boolean
const isLoggedIn=true;

//4. null
const userName2=null;

//5. undefined
let userName1;

//6. symbol
const id=Symbol("123");
const id2=Symbol("123");//both are different

console.log(id===id2);

//7. bigint
const bigNumber=1234567890123456789012345678901234567890n;

//non-primitive data types or reference data types
//3 types

//1. object
const person={ name:"Ayaz",age:19};

//2. array
const oddNumbers=[1,3,5,7,9];

//3. function
const addNumbers=function(a,b){
    return a+b;
}

console.log(addNumbers(2,3));