'use strict'
window.onload = function() {
	const validateString = (input) => {
		while (input == "") {
			console.log(`Sorry input can not be empty`);
			alert('This can not be empty.');
			input = prompt(`Please enter the right data input`);

		}
		return input;
	}
	const validateInt = (parseInput, isParsed) => {
		// set the NaN to have a value
		isParsed = 0;

		console.log("Sorry, this can only be a whole number.")
		alert("Sorry, this can only be a whole number.")

		while (parseInput != isParsed) {

			input = prompt(`Please enter the right data input`);
			parseInput = validateString(input);
			isParsed = parseInt(parseInput);

		}
		return isParsed;

	}

	const validateDecimal = (input) => {
		// set the NaN to have a value
		let isParsed = 0.0;
		console.log("Sorry, this can only be a number(s).")
		alert("Sorry, this can only be a number(s).")

		while (input != isParsed) {

			input = prompt(`Please enter the right data input`);
			let parseInput = validateString(input);
			isParsed = parseFloat(parseInput);

		}
		return isParsed;

	}
	///------Menu----////
	let parseInput;
	let spaces = " ";
	let whoIsLike = "who is like a";
	let hungry = "was hungry for";
	let nameAnimal, parseAnimal;
	//ii. Ask for 1 name
	let nameType, parseType;
	//iii. Ask for 1 adjective
	let nameAdjective, parseAdjective;
	//iv. Ask for 1 food item
	let nameFoodItem, parseFoodItem;
	//madlibs sentence
	let year, parseYear;
	let moneyYearly, parseMoneyYearly;
	let randomNumber, parseRandomNumber;
	//  let grandTotal, parseTotal;
	let sentenceStruct;

	nameAnimal = prompt("Enter your Animal name upon input:")
	parseAnimal = validateString(nameAnimal);
	nameType = prompt("Enter your Name Type upon input: ");
	parseType = validateString(nameType);
	nameAdjective = prompt("Enter your Adjective Type upon input:");
	parseAdjective = validateString(nameAdjective);
	nameFoodItem = prompt("Enter your Food Type upon input: ");
	parseFoodItem = validateString(nameFoodItem);

	year = prompt("Enter a year of choice:");
	parseInput = validateString(year);

	let checkNaN = Number.isNaN(parseFloat(parseInput));

	if (checkNaN == true || year.length < 4) {
		parseYear = validateDecimal(parseInput);
		console.log(parseYear);
	} else if (checkNaN != true) {
		parseYear = year;
		console.log(parseYear);

	}
	moneyYearly = prompt("Enter a cost like $1.25 etc:");
	parseInput = validateString(moneyYearly);

	checkNaN = Number.isNaN(parseFloat(parseInput));
	if (checkNaN == true) {
		parseMoneyYearly = validateDecimal(parseInput);
		console.log(parseMoneyYearly);
	} else if (checkNaN != true) {
		parseMoneyYearly = moneyYearly;
		console.log(parseMoneyYearly);

	}
	let total = parseFloat(parseMoneyYearly).toFixed(2);

	randomNumber = prompt("Input a random number:");
	parseInput = validateString(randomNumber);

	checkNaN = Number.isNaN(parseInt(parseInput));
	if (checkNaN == true) {
		parseRandomNumber = validateInt(parseInput);
	} else if (checkNaN != true) {
		parseRandomNumber = randomNumber;
	}
	sentenceStruct = "In the year of " + parseYear + "," + " about " + parseRandomNumber + " miles away... " + parseAdjective + spaces + nameType + spaces +
		whoIsLike + spaces + parseAnimal + spaces + hungry + spaces + parseFoodItem + " which costs $" + total + ".";
	console.log(sentenceStruct);
	document.getElementById("list").innerHTML += "<h3>" + sentenceStruct + "</h3>";

}