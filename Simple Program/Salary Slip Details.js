//Salary slip
	//Basic salary=1000, HRA=10, TA=7, DA=5 
	Basic_salary=1000;
	
	HRA = (Basic_salary*10)/100;
	TA =( Basic_salary*7)/100;
	DA = (Basic_salary*5)/100;
	Gross_salary = (Basic_salary+HRA+TA+DA);
	
	console.log("Basic Salary = ",Basic_salary);
	console.log("HRA = ",HRA);
	console.log("TA = ",TA);
	console.log("DA = ",DA);
	console.log("Gross Salary = ",Gross_salary);