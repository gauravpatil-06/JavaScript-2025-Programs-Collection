// Var, Let, Const Difference

// var
var a = 50;
var b = "Gaurav patil";
var c = null;
var d = undefined;
var a = "Patil"; // update this a
{
    var d = "New value Assigned";
    console.log(d) // Update this d
}

// let
let e = 100;
// let a = "Patil"; // can't update this a

// const
const developer = "Gaurav Patil";
// developer = "Patil" // can't update const keyword

console.log(a,b,c,e,developer)
