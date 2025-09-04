//Nested-If Statement : Greatest number among 3 number
a = 100;
b = 200;
c = 300;

if (a > b)
{
	if (a > c) 
	{
		console.log("Greatest number is ", a);
	}
	else {
		console.log("Greatest number is ", c);
	}
}
else 
{
	if (b > c) 
	{
		console.log("Greatest number is ", b);
	}
	else 
	{
		console.log("Greatest number is ", c);
	}
}
