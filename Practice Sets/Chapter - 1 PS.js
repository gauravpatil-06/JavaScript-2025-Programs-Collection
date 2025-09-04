// Chabler 1- Practice Set

// Q1. Create a variable of type string and try to add a number to it.
let a = "Gaurav Patil";
let b = 10;
console.log(a + b);

// Q2. Use typeof oberator to find the datatype of the string in last question.
console.log(typeof (a + b));

// Q3. Create a Const obiect in javascript can you change it to hold a number later.
const student = {
    rollno: 37,
    name: "Gaurav patil",
    age: 18,
    percentage: 93.87
}

// Q4. Try lo add a new key do the Const object in Problem 3 Were you able te do it?
student['year'] = "Final year";
student['name'] = "Patil";
console.log(student);

// Q5. Write a Js prognam to Create a word - meaning dictionary of 5 words.
const dic = {
    appreciate: "recognize the full worth of.",
    ataraxia: "a state of freedom from emotional disturbance and anxiety",
    yakka: "work, especially hard work."
}
console.log(dic);