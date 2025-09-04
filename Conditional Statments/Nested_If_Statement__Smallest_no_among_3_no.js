//Nested-If Statement : Smallest number among 3 number
a = 100;
b = 200;
c = 300;

if (a < b)
{
	if (a < c) 
	{
		console.log("Smallest number is ", a);
	}
	else {
		console.log("Smallest number is ", c);
	}
}
else 
{
	if (b < c) 
	{
		console.log("Smallest number is ", b);
	}
	else 
	{
		console.log("Smallest number is ", c);
	}
}
