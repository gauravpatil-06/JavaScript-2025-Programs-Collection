//For In Loop
const obj = {
    rollno: 37,
    name: "Gaurav patil",
    age: 18,
    percentage: 93.87
}

for (let a in obj) 
{
    //console.log(a); //only print key
    console.log("Student key is " + a + " & Value is " + obj[a]);
}