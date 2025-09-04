//Default Function
function add() //function defination
{
    let x=10;
    let y=20;
    return x + y;
}

let z = add(); //calling function
console.log("Default Function | Addition of two number:",z);

//Parameterized Function
function sub(a, b) 
{
    return a - b;
}

let c = sub(20,10);
console.log("Parameterized Function | Substraction of two number:",c);

//Arrow Function
const sum = (p,q) => {
    console.log("Sum of two number:",p+q);
}

sum(5,5);