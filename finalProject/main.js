window.onload = () => {
	//console.log("es6");
	// console.log(data.json.datasets);
	//get data
	let showGreeting = document.getElementById("greeting");
	//prompt new greeting on selection
	showGreeting.innerHTML = '<p>Please Enter First Name and Last Name:</p><hr/>';
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

	let array = [];
	let selPlayer = "";

	let count = 0;
	class Player {
		constructor(firstName, lastName) {
           // super(getFullNames);
			this._firstName = firstName;
			//  this.state = {
			// 	 lastName: prompt("enter a last name")
            //  }
      
            this._getFullNames = getFullNames;
            // getFullNames = {
            //    fullName: `${firstName}, ${lastName}`
            // };
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


		count += 1;
		var playersList = document.getElementById("test");
		if (query == "") {
			let getFirstName = validateStringName(query);
			//this is to get the name if valid
			playersList.innerHTML += '<p class="test"> ' + FullNames.fullNamesMethod(getFirstName, query1) + '</p>';

		} else if (query1 == "") {
			let getLastName = validateStringName(query1);
			//this is to get the name if valid
			playersList.innerHTML += '<p class="test">' + FullNames.fullNamesMethod(query, getLastName) + '</p>';

		} else if (query1 != "" && query != "") {
			playersList.innerHTML += '<p class="test">' + FullNames.fullNamesMethod(query, query1) + '</p>';
			//console.log(getFullNames.firstName.length)

			//checking first name is stored in constructor; 
		}

		//console.log(playersList)

        let newPlayer = new Array();
        let cart = new Array();
        const storage = [];

		for (let key in getFullNames.firstName) {
			newPlayer.push({
				key: parseInt(key),
				data: getFullNames.firstName[key]
			});

		}
		//get the list of players to be seen upon selecting
		console.log("players list: ", newPlayer);

		const cells = document.getElementsByClassName('test');

		// showGreeting = document.getElementById("greeting");
		//prompt new greeting on selection
		showGreeting.innerHTML = '<p>Please select your player:</p><hr/>';

		let greeting = document.getElementsByClassName('greeting');


		for (let cell of cells) {

			cell.onclick = function() {
				console.log("selected player", cell.textContent);
				selPlayer = cell.textContent;

				alert(`Current Player Selected: ${selPlayer}`);
				showGreeting.innerHTML = '<div class="picked"> Welcome ' + cell.textContent + '!</div> <hr/>' +
					'<button class="delete"id="delete">Exit Application</button><hr/>';

				for (let key in data.json.datasets) {
					storage.push({
						name: key,
						data: data.json.datasets[key]
					});

				}
				// debugger

				/* another way to map and see the data */
				// const showNames = storage.map(nameElement => {  
				//      return '<div key=' + `${nameElement}` + '><p>'+`${nameElement.name}` +'</p>'
				//      +'<br/> <img src="'+  nameElement.data.image +'"/></br></br> See more Details:'+ nameElement.data.download_link+'</p>'
				//  +'</div>'}
				//  )

				var item = [];
				//console.log("this is data:", storage)
           
				for (let m = 0; m < storage.length; m++) {

					//getting readable data
					//document.getElementById("data").innerHTML += showNames;

					var items = []
					//show the data
                    items = document.getElementById("data");
					// itemRow1 = document.getElementById("data-1");
					// itemRow2 = document.getElementById("data-2");
					// itemRow3 = document.getElementById("data-3");
					// itemRow4 = document.getElementById("data-4");

                    //items.className = "data-click";
				   document.getElementById("prompt").innerHTML = '<p>Select the Plant Name to add to cart and Click it again to delete:</p><hr/>';
				 if(m >= 0 && m < storage.length){
					items.innerHTML += '<div class="item"><p id="name">' + storage[m].name +
						'</p><br/> <img src="' + storage[m].data.image + '"/></br> See more Details: <a href="' + storage[m].data.download_link + '">here</a></div>';
				   }
				//    if(m >= 0 && m < 3){
				// 	itemRow1.innerHTML += '<div class="item"><p id="name">' + storage[m].name +
				// 		'</p><br/> <img src="' + storage[m].data.image + '"/></br> See more Details: <a href="' + storage[m].data.download_link + '">here</a></div>';
				//    }
				//    else if(m >= 0 && m < 6){
				// 	itemRow2.innerHTML += '<div class="item"><p id="name">' + storage[m].name +
				// 		'</p><br/> <img src="' + storage[m].data.image + '"/></br> See more Details: <a href="' + storage[m].data.download_link + '">here</a></div>';
				//    }
				//    else if(m >= 0 && m < 9){
				// 	itemRow3.innerHTML += '<div class="item"><p id="name">' + storage[m].name +
				// 		'</p><br/> <img src="' + storage[m].data.image + '"/></br> See more Details: <a href="' + storage[m].data.download_link + '">here</a></div>';
				//    }
				//    else if(m >= 0 && m < 12){
				// 	itemRow4.innerHTML += '<div class="item"><p id="name">' + storage[m].name +
				// 		'</p><br/> <img src="' + storage[m].data.image + '"/></br> See more Details: <a href="' + storage[m].data.download_link + '">here</a></div>';
				//    }
				}

				// let's show the method buttons
				document.getElementById("navigation").innerHTML +=  '<table> <tr><th class="water" id="water">Water</th>'+'<th class="tend" id="tend">Tend</th>'+'<th class="harvest" id="harvest">Harvest</th></tr></table>';
		
				//s for select
				const cells = document.getElementsByClassName('item');
				//item[s] = document.getElementById("item");
				//console.log(cells.length)
				for (let cell of cells) {
                    //console.log(cell)
                    //e upon event
                    let  e = 0;  
					cell.onclick = function() {
              

						let status = cell.getElementsByTagName('p');
						console.log(status.name.innerText);
						alert(status.name.innerText);

                         let plantName = [];
                         plantName.push(status.name.innerText);
                         for (let key in plantName) {
                             cart.push({
                               // id: parseInt(e) + 1,
                                name: plantName[key]
                            });
        
                        }
                        
                   
                  document.getElementById('notification').innerHTML = '<div class="circle">'+ cart.length +'</div>';
				   
					}
				}

            }
   

          const getCart = document.getElementsByClassName('cart');
            //const getCartImg = document.getElementsByTagName('img');
          //let showImg =  document.getElementById("cart").style.visibility = "visible";
          let show =  document.getElementById("list").style.visibility = "hidden";
          const  getList = [];
     
            for (let seeds of getCart) {
                //console.log(cell)
                let  c = -1;  
                
                let  find = 0; 
                let counter = 0; 
                let index;

              const showList = function(){ 
                
                    console.log("show");
                    let status = seeds.getElementsByTagName('p');
                    console.log(status)
                   show =  document.getElementById("list").style.visibility = "visible";
                   // console.log("seeds in cart:", seeds);
                   console.log("You have this amount of items in your cart:" + cart.length);                     
                    alert(cart);
                   for(let l = 0; l <= cart.length; l++){
                    counter = c += 1;
                    index =  l;
                    index += 1;

                      if(l >= 0 && l  < cart.length){
                        
                        console.log( index + ") item: " +  cart[l].name) ;
                        getList[l] = document.getElementById("list");
                        getList[l].innerHTML += '<p>'+ cart[l].name +'</p><hr/>';
                      }
      
                   }

            }
            function emptyCart(from, to){
                var rest = cart.slice((to || from) + 1 || cart.length);
                cart.length = from < 0 ? cart.length + from : from;
                return cart.push.apply(cart, rest);
            }
               const deleteList =() => { 
             
                   //empty cart or   cart = [];
                   emptyCart(0, cart.length);
                   //reset counter 
                   e = 0;
                   console.log("You have no more items in the cart:", cart.length)

              

                   for(let i = 0; i < getList.length; i++){
                    document.getElementById("list").innerHTML = "";

                     document.getElementById('notification').innerHTML = "";
                     show =  document.getElementById("list").style.visibility = "hidden";


                   }
                  


                //    seeds.addEventListener('click', function (e) {
                   //showImg =  document.getElementById("cart").style.visibility = "visible";
                    // document.getElementById("list").style.display = "none";

                //   });
                return cart;
                }
              
            // Toggle element visibility
            seeds.addEventListener('click', function (e) {
                   if(show == "hidden" && cart.length != 0){
                       showList();
                      
                   }else {
                
                   deleteList();
                   }
                  
              });

        }
   
			//const picked = document.getElementsByClassName('picked');
			for (let item of greeting) {
				item.onclick = function() {
					alert("Exiting application.");
					//  item.parentNode.removeChild(item);
					location.reload();
					return false;


				}
			}

		};

		var iconWater = document.getElementsByClassName('water');
		for (let item of iconWater) {
			item.onclick = function() {
				alert("Watering the plants");
				//  item.parentNode.removeChild(item);

				return false;


			}
		}

		var iconTend = document.getElementsByClassName('tend');
		for (let item of iconTend) {
			item.onclick = function() {
				alert("Tending the plants");
				//  item.parentNode.removeChild(item);

				return false;


			}
		}
		var iconHarvest = document.getElementsByClassName('harvest');
		for (let item of iconHarvest) {
			item.onclick = function() {
				alert("Time to harvest the plants");
				//  item.parentNode.removeChild(item);

				return false;


			}
		}


	}

	var submitted = document.getElementById('submit');

	submitted.onclick = function() {
		query = mainInput.value;
		query1 = mainInput1.value;

        validate(query, query1);

		return false;


	}
}
//cited images at google images 