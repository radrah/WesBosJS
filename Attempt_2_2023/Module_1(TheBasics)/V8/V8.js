// Numbers

const age = 100;
const name1 = 'wes';

console.log(typeof(age), typeof(name1));

const a = 10;
const b = 30;

const c = 123 + '1'; // concatenation
console.log(a, b, c);
console.log(Math.round(20.675), Math.floor(20.7),Math.ceil(20.1), Math.random());

const smarties = 20;
const kids = 3;
const eacKidGets = Math.floor(smarties/kids);
const leftAfterKidsTake = smarties % kids;

console.log(eacKidGets, leftAfterKidsTake);

const price = 1034;  //try to always use prices in cents then divide by 100 to not run into JS floating problem
const smartiesPrice = price ** smarties ** kids;

console.log(smartiesPrice);