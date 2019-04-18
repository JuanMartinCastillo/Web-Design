var age = prompt("What is your age?");

if ( age < 0){
	alert("Your age is not valid");
}

if ( age == 21){
	alert("Happy 21st birthday");
}

if ((age % 2) !== 0 ){
	alert("Your age is odd!");
}

if ( age % Math.sqrt(age) === 0){
	alert("Es cuadrado");
}