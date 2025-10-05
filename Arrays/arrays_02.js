const marvelHeroes = ["Iron Man","Captain America","Spiderman",];

const dcHeroes = ["Superman", "Batman", "Flash"];

//marvelHeroes.push(dcHeroes);
//console.log(marvelHeroes);
//console.log(marvelHeroes[3][0]);
//not recommended pushes the entire array as an element

const heroes=marvelHeroes.concat(dcHeroes);
console.log(heroes);
//does not change the original array

//spread operator
console.log("Spread operator");
const heroes2=[...marvelHeroes,...dcHeroes,"Wolverine"];
console.log(heroes2);
//does not change the original array

//nested array
const nestarray=[[1,2,3],[4,5,6],7,[7,8,[9,3,4]]];
const flatarray=nestarray.flat(1);
console.log(flatarray);
//flattens the array up to the specified depth


//array for scraping
console.log(Array.isArray("Ayaz"));

console.log(Array.from("Ayaz"));
console.log(Array.from({name : "Ayaz"}));//empty array

//Array.of
let score=100;
let score2=200;
let score3=300;

console.log(Array.of(score,score2,score3));
//creates an array from the arguments passed


//practice questions 1

const marks=[85,97,44,37,76,60];
console.log(marks);
console.log(marks.length);

let totalmarks=0;
for(let value of marks){
    totalmarks=totalmarks+value;
}
console.log(totalmarks);
let avrage=totalmarks/marks.length;
console.log(`average marks: ${avrage}`);


//practice questions 2
let value=[250,645,300,900,50];
for(let i of value){
    price=i*0.1;
    newprice=i-price;
    console.log(`30% of ${i} is ${price} and the new price is ${newprice}`);
}