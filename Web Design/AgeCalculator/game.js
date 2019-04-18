var secretNumber = 9;

var guessNum = prompt("Enter your number");

// var guessNum = Number(prompt("Enter your number"));


// if (guessNum < secretNumber){
// 	alert("Too low... try again");
// 	}
// 	else if ( guessNum > secretNumber){
// 		alert("Too high... try again");
// 		}
// 		else{
// 			alert("YAY! you won");
// 			}

if (Number(guessNum) === secretNumber){

	alert("YAY you won")
}
else if (Number(guessNum) < secretNumber){
	alert("Too low... try again");
}
else {
	alert("Too high... try again");
}

