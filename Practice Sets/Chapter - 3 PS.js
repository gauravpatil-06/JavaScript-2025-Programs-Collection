// Chabler 3- Practice Set
// Q1. Writ a program to print the marks of a Sudent in an object using for loop.

let marks = {
    Gaurav: 99,
    Vinod: 96,
    Vitthal: 89,
    Shivam: 88,
    Akash: 95
}

for (let i = 0; i < Object.keys(marks).length; i++) 
{
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

console.log("\n");


// Q2. Write the progrom in Q1 using for in loop.

let mark = {
    Gaurav: 99,
    Vinod: 96,
    Vitthal: 89,
    Shivam: 88,
    Akash: 95
}

for (let key in mark) 
{
    console.log("The marks of " + key + " are " + mark[key]);
}


// Q3. Write a program to print "try again" until the user enter the correct number.

// let correct_no = 6;
// let i = 0;
// while(i != correct_no)
// {
//     i = promp("Enter number:");
// }
// console.log("You are entered correct number");


console.log("\n");


// Q4. Write a functon to find mean of 5 numbers.

function mean(a, b, c, d, e)
{
    return (a+b+c+d+e)/5;
}

let m = mean(1,2,3,4,5);
console.log("Mean of 5 number:",m);