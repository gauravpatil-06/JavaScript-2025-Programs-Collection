//Logical Operators
a = 20;
b = 5;;

c = (a < b && a <= b);
console.log("Logical AND ($a<$b and $a<=$b) = ",c);

c = (a < b || a >= b);
console.log("Logical OR ($a<$b or $a>=$b) = ",c);

c = !(a < b && a <= b);
console.log("Logical NOT ($a<$b and $a<=$b) = ",c);