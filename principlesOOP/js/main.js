(function() {

	var resultsDIV = document.getElementById("results"),
		mainInput = document.forms[0].main,
		mainInput1 = document.forms[0].main1;

	var input;
	var query = mainInput.value;
	var query1 = mainInput1.value;

	const validateString = (input) => {
		while (input == "") {
			console.log(`Sorry input can not be empty`);
			alert('This can not be empty.');
			//mainInput.focus();
			return;
		}
		//return input;
	}
	const validateStringName = (input) => {
		while (input == "") {
			console.log(`Sorry input can not be empty`);
			alert('This can not be empty.');
			input = prompt("enter input name here: ");
		}
		return input;
	}

	const getFullNames = {
		firstName: [],
		lastName: []
	};
	let newEmployee = "";
	let count = 0;
	class Employee {
		constructor(firstName, lastName) {
			this._firstName = firstName;
			//  this.state = {
			// 	 lastName: prompt("enter a last name")
			//  }
			this._getFullNames = getFullNames;
			this._lastName = lastName;

		}
		//return first name
		static firstNameMethod(firstName) {
			//I wanted to add first name in to be listed.
			//   console.log( this._getFullNames.firstName)
			return firstName;
		}
		//return last name
		static lastNameMethod(lastName) {
			//for console
			// console.log( this._getFullNames.lastName)
			return lastName;
		}
		static fullNamesMethod(firstName, lastName) {
			getFullNames.firstName.push(firstName);
			getFullNames.lastName.push(lastName);
			for (let i = 0; i < getFullNames.firstName.length; i++) {
				newEmployee = new Employee(firstName, lastName);

			}
			return firstName + lastName;
		}

	}
	class FirstName extends Employee {
		// pass the super first name method in as it extends
		static firstNameMethod(firstName) {
			return `${super.firstNameMethod(firstName)}`;
		}
	}
	class LastName extends Employee {
		// pass the super first name method in as it extends
		static lastNameMethod(lastName) {
			return `, ${super.lastNameMethod(lastName)} `;
		}
	}

	class FullNames extends Employee {
		constructor(firstName, lastName) {
			super(firstName, lastName);
		  }
		// pass the super first name method in as it extends
		static fullNamesMethod(firstName, lastName) {
			return super.fullNamesMethod(FirstName.firstNameMethod(firstName), LastName.lastNameMethod(lastName));
		}
	}


	var validate = function(query, query1) {
		if (query.length < 1 && query1.length < 1) {
			validateString(query);
			return null;
		};

		//	console.log(FullNames.fullNamesMethod(FirstName.firstNameMethod(query),LastName.lastNameMethod(query1)))
		//  let checkLastName = validateStringLastName(firstName.state.lastName);
		//	Employee.state.push(FirstName.firstNameMethod(query))	
		count += 1;
		if (query == "") {
			let getFirstName = validateStringName(query);
			//this is to get the name if valid
			document.getElementById("test").innerHTML += '<p> ' + count + ') ' + FullNames.fullNamesMethod(getFirstName, query1) + '</p><hr/>';

		} else if (query1 == "") {
			let getLastName = validateStringName(query1);
			//this is to get the name if valid
			document.getElementById("test").innerHTML += '<p> ' + FullNames.fullNamesMethod(query, getLastName) + '</p><hr/>';

		} else if (query1 != "" && query != "") {
			document.getElementById("test").innerHTML += '<p> ' + count + ') ' + FullNames.fullNamesMethod(query, query1) + '</p><hr/>';
			//console.log(getFullNames.firstName.length)

			//checking first name is stored in constructor; 
		}
		let newI = 0;
		for (let i = 0; i < newEmployee._getFullNames.firstName.length; i++) {
			newI = i + 1;
			console.log(`Full name of ${newI})\n ${newEmployee._getFullNames.firstName[i]} ${newEmployee._getFullNames.lastName[i]}`)


		}

	};

	document.forms[0].onsubmit = function() {
		query = mainInput.value;
		query1 = mainInput1.value;

		debugger
		validate(query, query1);
		return false;
	};


})();