/* eslint-disable no-unused-vars */
// Objects

const person = {
	first: 'wes',
	last: 'bos',
	age: 100,
};

const html =`
    <div>
        <h1>Name: ${person.first, person.last}<h1/>
        <h2>Age: ${person.age}<h2/>
    <div/>
`;

document.body.innerHTML = html;

