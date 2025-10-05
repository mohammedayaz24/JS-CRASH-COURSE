//Array

//An array is a special variable, which can hold more than one value at a time.
//different data types can be stored in an array

const myArr=[1,2,3,4,5];
const myArr1=["ayaz","ahmed", "khan"];
const myArr2=new Array(1,2,3,4,5);
console.log(myArr);
console.log(typeof myArr);//object

//zero based index
console.log(myArr[0]);

//length
console.log(myArr.length);

//methods
console.log(myArr.__proto__);

//push
console.log("Push method");
myArr.push(6);
myArr.push(7);
console.log(myArr);

//pop
console.log("Pop method");
myArr.pop();
console.log(myArr);

//unshift
console.log("Unshift method");
myArr.unshift(0);
console.log(myArr); //adds element at the beginning
/*note: unshift is slower than push because 
it has to reindex all elements*/

//shift
console.log("Shift method");
myArr.shift();
console.log(myArr); //removes element from the beginning
/*note: shift is slower than pop because 
it has to reindex all elements*/

//indexOf
console.log("IndexOf method");
console.log(myArr);
console.log(myArr.indexOf(3));
console.log(myArr.indexOf(10));//-1 if not found

//includes
console.log("Includes method");
console.log(myArr.includes(3));
console.log(myArr.includes(10));//false if not found

//join
console.log("Join method");
const newArr=myArr1.join()
console.log(myArr1);
console.log(newArr);
//join bind array elements into a string
const newArrJoin=myArr1.join(" ");
console.log(newArrJoin);

console.log("++++++++++++++++++++++++++++++++++++");
//slice and splice
console.log("Slice and Splice method");

console.log("A : ",myArr);

const newArr1=myArr.slice(0,3);
//slice does not modify original array
console.log("slice: ",newArr1);

console.log("B : ",myArr);
const newArr2=myArr.splice(0,3);
//splice modifies original array by removing elements
console.log("Splice: ",newArr2);

console.log("C : ",myArr);
