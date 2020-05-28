window.onload = () => {
	//console.log("es6");
	// console.log(data.json.datasets);
	//get data
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
	let newPlayer = "";
	let count = 0;
	class Player {
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
				newPlayer = new Player(firstName, lastName);

			}
			return firstName + lastName;
		}

	}
	class FirstName extends Player {
		// pass the super first name method in as it extends
		static firstNameMethod(firstName) {
			return `${super.firstNameMethod(firstName)}`;
		}
	}
	class LastName extends Player {
		// pass the super first name method in as it extends
		static lastNameMethod(lastName) {
			return `, ${super.lastNameMethod(lastName)} `;
		}
	}

	class FullNames extends Player {
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
		//	Player.state.push(FirstName.firstNameMethod(query))	
		count += 1;
		if (query == "") {
			let getFirstName = validateStringName(query);
			//this is to get the name if valid
			document.getElementById("test").innerHTML += '<p> ' + count + ') ' + FullNames.fullNamesMethod(getFirstName, query1) + '</p><hr/>';

		} else if (query1 == "") {
			let getLastName = validateStringName(query1);
			//this is to get the name if valid
			document.getElementById("test").innerHTML += '<p> ' + count + ') ' + FullNames.fullNamesMethod(query, getLastName) + '</p><hr/>';

		} else if (query1 != "" && query != "") {
			document.getElementById("test").innerHTML += '<p> ' + count + ') ' + FullNames.fullNamesMethod(query, query1) + '</p><hr/>';
			//console.log(getFullNames.firstName.length)

			//checking first name is stored in constructor; 
		}

		let newI = 0;
		for (let i = 0; i < newPlayer._getFullNames.firstName.length; i++) {
			newI = i + 1;
			console.log(`Full name of ${newI})\n ${newPlayer._getFullNames.firstName[i]} ${newPlayer._getFullNames.lastName[i]}`)
			if (newPlayer._getFullNames.firstName[i] != "") {
				document.getElementById("test").innerHTML += '<p> Select to what you would like to grow:</p><hr/>';

			}

		}

	};

	document.forms[0].onsubmit = function() {
		query = mainInput.value;
		query1 = mainInput1.value;

		validate(query, query1);
		return false;
	};



	const storage = [];
	for (let key in data.json.datasets) {
		storage.push({
			name: key,
			data: data.json.datasets[key]
		});

	}
	// debugger
	console.log(storage)
	// const showNames = storage.map(nameElement => {  
	//      return '<div key=' + `${nameElement}` + '><p>'+`${nameElement.name}` +'</p>'
	//      +'<br/> <img src="'+  nameElement.data.image +'"/></br></br> See more Details:'+ nameElement.data.download_link+'</p>'
	//  +'</div>'}
	//  )
	var item = [];
	for (let m = 0; m < storage.length; m++) {

		//getting readable data
		//console.log(storage[m])
		//document.getElementById("data").innerHTML += showNames;
        var items = []
        //show the data
		items = document.getElementById("data");
		items.className = "data-click";
		items.innerHTML += '<div class="item"><p id="name">' + storage[m].name +
			'</p><br/> <img src="' + storage[m].data.image + '"/></br> See more Details: <a href="' + storage[m].data.download_link + '">here</a></div>';


		// var spanHolder = document.getElementById('span-holder');
		// spanHolder.append(item[m]);
 //debugger

	}
	for (let s = 0; s < storage.length; s++) {
      //s for select
		const cells = document.getElementsByClassName('item');
		item[s] = document.getElementById("item");
		//console.log(cells.length)
		for (let cell of cells) {
			//console.log(cell)
			cell.onclick = function() {
				let status = cell.getElementsByTagName('p');
				console.log(status.name.innerText);
				alert(status.name.innerText);


			}
		}
	}
}