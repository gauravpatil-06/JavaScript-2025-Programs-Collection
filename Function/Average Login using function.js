function avg(x, y) 
{
    // return Math.round(x + y / 2);
    return (x + y) / 2;
}

let a = 1;
let b = 2;
let c = 3;

console.log("Average of a & b is", avg(a, b));
console.log("Average of b & c is", avg(b, c));
console.log("Average of a & c is", avg(a, c));