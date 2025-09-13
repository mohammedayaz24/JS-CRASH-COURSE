const accountId = 5678
let accountEmail ="mohammedayaz2411@gmail.com"
var accountPassword = "123456"
accountCity = "Bangalore"
let accountState; //undefined

//accountId = 2// not allowed to declare again
accountState = "Karnataka"
accountEmail = "ayaz567@gmail.com"
accountPassword = "654321"
accountCity = "Mumbai"


/*
prefer not to use var bcoz of issue in block scope and funtional scope
use let and const instead
*/

console.log(accountId);
console.table([accountId,accountEmail, accountPassword, accountCity,accountState]);