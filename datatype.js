"use strict";

//alert("datatype.js loaded");//we are using node so alert will not work

//datatypes

//number =>2 to power 53
let age = 22;
let weight = 75.5;

//bigint => beyond 2 to power 53
let bigIntValue = 1234567890123456789012345678901234567890n;

//string =>"",'',``
let firstName = "Ayaz";//prefer to use double quotes
let lastName = 'Mohammed';
let middleName = `Khan`;

//null => empty value
let city = null;

//undefined => not assigned any value
let state; //undefined

//boolean => true or false
let isLoggedIn = false;
let isEmailVerified = true;

//symbol => unique value
let id = Symbol("123");
let anotherId = Symbol("123");//both are different

//object => key value pair
let person = {
    firstName: "Ayaz",
    lastName: "Mohammed",
    age: 22,
    isLoggedIn: false
}

//array => ordered collection of items
let selectedColors = ["red", "blue", "green"];
let fruits = ["apple", "banana", "mango"];

//function => block of code to perform a specific task
function greet() {
    console.log("Hello World");
}


console.log(["age:",age,"weight:",weight,"bigIntValue:",bigIntValue,"firstName:",firstName,"lastName:",lastName,"middleName:",middleName,"city:",city,"state:",state,"isLoggedIn:",isLoggedIn,"isEmailVerified:",isEmailVerified,"id:",id,"anotherId:",anotherId,"person:",person,"selectedColors:",selectedColors,"fruits:",fruits]);
console.table(["age:",age,"weight:",weight,"bigIntValue:",bigIntValue,"firstName:",firstName,"lastName:",lastName,"middleName:",middleName,"city:",city,"state:",state,"isLoggedIn:",isLoggedIn,"isEmailVerified:",isEmailVerified,"id:",id,"anotherId:",anotherId,"person:",person,"selectedColors:",selectedColors,"fruits:",fruits]);


console.log(typeof age);
console.log(typeof bigIntValue);
console.log(typeof firstName);
console.log(typeof city);
console.log(typeof state);