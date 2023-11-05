/* eslint-disable */
const name1 = 'wes';
const middle = 'topher';
const last = 'bos';

const sentence1 = 'she\'s so cool';
const sentence2 = 'she\'s so cool';

const song = `hola

hi
by

bye

leshgo`;

const hello = 'hello my name is ' + name1 + '. Nice to meet you';
let hello2 = 'hello my name is ';
hello2 = hello2 + name1;
hello2 += '. Nice to meet you';

const hello3 = `hello my name is ${name1} ${middle} ${last}. Nice to meet you. I am ${200+3} years old`;

const html = `
    <div>
        <h2>${name1}<h2/>
        <p>${hello}<p/>
    <div/>
`;

document.body.innerHTML = html;
console.log(html);

/* eslint-enable */