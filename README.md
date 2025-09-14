# JS-CRASH-COURSE
EAT - CODE- SLEEP - REAPEAT

# lesson 1 :variables

const accountId = 5678
let accountEmail ="mohammedayaz2411@gmail.com"
var accountPassword = "123456"
accountCity = "Bangalore"
let accountState; //undefined
/*
prefer not to use var bcoz of issue in block scope and funtional scope
use let and const instead
*/


# Lesson 2: Datatypes
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


# lesson 3 : conversionopeartion 
