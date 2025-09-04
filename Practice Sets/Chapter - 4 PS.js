// Chabler 3- Practice Set

// Q1. Whar will the following print in javascript? console.log("gaurav\"".length);

let str = "Gaurav\"";
console.log(str.length);
	

// Q2. Explore the includes, startswith & endswith function of a string.

const sentence = 'The quick brown fox jumps over the lazy dog';
const word = 'fox';
const end = 'dog';

//includes
console. log(`The word "${word}" ${sentence. includes(word) ? 'is' : 'is not'} in the sentence`);

//startsWith
console. log(`The word "${word}" ${sentence. startsWith(word) ? 'is' : 'is not'} in the sentence`);

//endsWith
console. log(`The word "${end}" ${sentence. endsWith(end) ? 'is' : 'is not'} in the sentence`);


// Q3. Write a program to convert a given string to lowercase.

console.log("Lowercase Letter :",str.toLowerCase()); //toLowerCase Method


// Q4. Extract the amount out of this string. "Please give Rs. 1000"
let str1 = "Please give Rs. 1000";


// let amount = str1.slice("Please give Rs. ".length);
let amount = str1.slice(16);
console.log(amount);
	

// Q5. Try to change 4th character of a given string where you able to do it?
let str2 = "Gaurav Patil";
str2[4] = "R";
console.log(str2); //str2 is not changed, because string is immutable