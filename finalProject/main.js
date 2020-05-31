window.onload = () => {
	//console.log("es6");
	// console.log(data.json.datasets);
	//get data
	let showGreeting = document.getElementById("greeting");
	//prompt new greeting on selection
	showGreeting.innerHTML = '<h3>Please Enter First Name and Last Name:</h3><hr/>';
	var resultsDIV = document.getElementById("results"),
		mainInput = document.forms[0].main,
		mainInput1 = document.forms[0].main1;
		mainInput2 = document.forms[0].main2;

       
	var input;
	var query = mainInput.value;
	var query1 = mainInput1.value;
	var query2 = mainInput2.value;

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

	// const getFullNames = {
	// 	firstName: [],
	// 	lastName: []
	// };

	let array = [];
	let selPlayer = "";

	let count = 0;
	class Player {
		constructor(firstName, lastName, address) {
			this._getFullNames = {};
           // super(getFullNames);
			this._firstName = firstName;
			this._address = address;

			//  this.state = {
			// 	 lastName: prompt("enter a last name")
            //  }
      
           // this._getFullNames = getFullNames;
            // getFullNames = {
            //    fullName: `${firstName}, ${lastName}`
            // };
            this._lastName = lastName;

		}
	   static fullNamesMethod(firstName, lastName) {
		this._getFullNames = {
			firstName:[],
			lastName:[]
		}
			this._getFullNames.firstName.push(firstName);
			this._getFullNames.lastName.push(lastName);
			return 	firstName + lastName;
		}
		static fullNamesMapMethod(firstName, lastName) {
			this._getFullNames = {
				firstName:[],
				lastName:[]
			}
				this._getFullNames.firstName.push(firstName);
				this._getFullNames.lastName.push(lastName);
				return this._getFullNames;
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
		// i find that this should be private if so...
		static addressMethod(address) {
			return address;
		}
		// static fullNamesMethod(firstName, lastName) {
		// 	getFullNames.firstName.push(firstName);
        //     getFullNames.lastName.push(lastName);
		// 	return firstName + lastName;
		// }

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
		// // pass the super first name method in as it extends
		static fullNamesMethod(firstName, lastName) {
			return super.fullNamesMethod(FirstName.firstNameMethod(firstName), LastName.lastNameMethod(lastName));
		}
		// i find that this should be private if so...
		static addressMethod(address) {
			return super.addressMethod(address);
		}
	}


	var validate = function(query, query1, query2) {
		if (query.length < 1 && query1.length < 1 && query2.length < 1) {
			validateString(query);
			validateString(query1);
			validateString(query2);


			return null;
		};

		let playersList =[];

		count += 1;
		for(let q = 0; q < count; q++){
	    playersList[q] = document.getElementById("test");
		if (query == "") {
			let getFirstName = validateStringName(query);
			//this is to get the name if valid
			playersList[q].innerHTML += '<p class="test"> ' + FullNames.fullNamesMethod(getFirstName, query1) + '</p>';

		} else if (query1 == "") {
			let getLastName = validateStringName(query1);
			//this is to get the name if valid
			playersList[q].innerHTML += '<p class="test">' + FullNames.fullNamesMethod(query, getLastName) + '</p>';

		} else if (query1 != "" && query != "") {
			playersList[q].innerHTML += '<p class="test">' + FullNames.fullNamesMethod(query, query1) + '</p>';
			//console.log(getFullNames.firstName.length)

			//checking first name is stored in constructor; 
		}
	}
	// Exit
	let exit = document.getElementById('exit');

	exit.addEventListener('click', function(){
		alert("Exiting application.");
		location.reload();
		return false;
	})
		//console.log(playersList)
document.getElementById("exit").innerHTML ='<button class="exit"id="exit">Exit Application</button><hr/>';
        let newPlayer = new Array();
       // let cart = [];
        const storage = [];
		let dict = {};
		pushPlayers = [];
	
		for (let key in Player.fullNamesMapMethod(query, query1).firstName) {
			newPlayer.push({
				key: parseInt(key),
				data: Player.fullNamesMapMethod(query, query1).firstName[key]
			});

		}
		//get the list of players to be seen upon selecting
		console.log("players list: ", newPlayer);

		const cells = document.getElementsByClassName('test');

		// showGreeting = document.getElementById("greeting");
		//prompt new greeting on selection
		showGreeting.innerHTML = '<p>Please select your player:</p><hr/>';
		//show cart 
		document.getElementById("cart").innerHTML = '<img src="https://i.imgur.com/cguhi5y.png?1"/>';


		console.log("cells:",cells)


		for (let cell of cells) {

			cell.onclick = function() {
				console.log("selected player", cell.textContent);
				selPlayer = cell.textContent;
				dict = {
					FirstName: selPlayer,
					cart:[]
				  };
				  for (let key in cell) {
					pushPlayers.push({
						name: key,
						data: selPlayer[key]
					})
				}
			   console.log(pushPlayers);
			   
				alert(`Current Player Selected: ${dict.FirstName}`);
				showGreeting.innerHTML = '  <h3>Current player:</h3><div class="picked"> Welcome ' + dict.FirstName + '!</div> <hr/>';

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
				   document.getElementById("prompt").innerHTML = '<p>Select the Plant Name to add to cart and Click it again to delete:</p><hr/>';
				 if(m >= 0 && m < storage.length){
					items.innerHTML += '<div class="item"><p id="name">' + storage[m].name +
						'</p><br/> <img src="' + storage[m].data.image + '"/></br> See more Details: <a href="' + storage[m].data.download_link + '">here</a></div>';
				   }
				}
		
 
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
                            //  cart.push({
                            //    // id: parseInt(e) + 1,
                            //     name: plantName[key]
							// });
							dict.cart.push({
									// id: parseInt(e) + 1,
									 name: plantName[key]
						
							})
        
                        }
                 console.log(dict)
				 document.getElementById("list").innerHTML = "";

				  document.getElementById('notification').innerHTML = '<div class="circle">'+ dict.cart.length +'</div>';
				  document.getElementById("cart").innerHTML = '<img src="https://i.imgur.com/2ZdgXqH.png?1"/>';
				  document.getElementById('emptyCart').innerHTML = '<div class="emptyCart"> Empty Cart </div>';

					}
				}

			}

			
		

	// // Empty Cart
	// function emptyCart(from, to){
    //             var rest = cart.slice((to || from) + 1 || cart.length);
    //             cart.length = from < 0 ? cart.length + from : from;
    //             return cart.push.apply(cart, rest);
	// }
	function emptyCart2(from, to){
		var rest = dict.cart.slice((to || from) + 1 || dict.cart.length);
		dict.cart.length = from < 0 ? dict.cart.length + from : from;
		return dict.cart.push.apply(dict.cart, rest);
}
	const emptyCartButton = document.getElementById('emptyCart');
        emptyCartButton.addEventListener("click", function(){
			if(dict.cart.length > 0){
				alert('Emptying cart');
                //empty cart or   cart = [];
				// emptyCart(0, cart.length);
				 emptyCart2(0, dict.cart.length);
				 //reset e
				 e = 0;
				 for(let i = 0; i < getList.length; i++){
                    document.getElementById("list").innerHTML = "";
					 document.getElementById('notification').innerHTML = "";
					 document.getElementById("navigation").innerHTML = "";

					 show =  document.getElementById("list").style.visibility = "hidden";
					 document.getElementById("cart").innerHTML = '<img src="https://i.imgur.com/cguhi5y.png?1"/>';

				   }
				}
				// }else{
				// 	alert('Your cart is empty.');
				// }
			  })
	// Get Cart	  

          const getCart = document.getElementsByClassName('cart');
            //const getCartImg = document.getElementsByTagName('img');
          //let showImg =  document.getElementById("cart").style.visibility = "visible";
		  let show =  document.getElementById("list").style.visibility = "hidden";
		//   document.getElementById('notification').style.visibility = "hidden";

          const  getList = [];
          const purchasedCart = [];
		  let l = 0;
            for (let seeds of getCart) {
                let  c = -1;  
                
                let  find = 0; 
                let counter = 0; 
                let index;
// Show Cart
              const showList = function(){ 
		
                    console.log("show");
                   // console.log(status)
				 show = document.getElementById("list").style.visibility = "visible";
                   // console.log("seeds in cart:", seeds);
                   console.log("You have this amount of items in your cart:" + dict.cart.length);                     
                   for(l = 0; l <= dict.cart.length; l++){
                    counter = c += 1;
                    index =  l;
					index += 1;
					getList[l] = document.getElementById("list");

                      if(l >= 0 && l  < dict.cart.length){
                        console.log( index + ") item: " +  dict.cart[l].name) ;
						//alert(index)
                        getList[l].innerHTML +=  '<p>'+ index +  ') ' + dict.cart[l].name +'</p><hr/>';
						//status = getList[l].getElementsByTagName('p');
			
					}	else{
						break;
					}

				   }
				
				   document.getElementById('purchase').innerHTML = '<button id="purchased">puchase</button>';
				   let purchaseItems = document.getElementById('purchased');
	   
				   purchaseItems.addEventListener("click", function(){
		   
					   for(let seed =0; seed <= dict.cart.length; seed++){
						   purchasedCart.push(dict.cart[seed].name);
   
						   let index  = seed + 1;
						   document.getElementById("growing-title").innerHTML ='You are currently growing:';
						   document.getElementById("growing").innerHTML += '<li>'+ index +") "+ purchasedCart[seed]+'</li><hr/>';
						   console.log("You are currently growing: ", purchasedCart[seed]);
						   document.getElementById('purchase').innerHTML = '';
						   document.getElementById("list").innerHTML = "";
						   document.getElementById('notification').innerHTML = "";
						   document.getElementById("cart").innerHTML = '<img src="https://i.imgur.com/cguhi5y.png?1"/>';
						   items = document.getElementById("data").style.visibility = "hidden";
						   document.getElementById("cart").style.visibility = "hidden";
						   document.getElementById("emptyCart").style.visibility = "hidden";
						   document.getElementById("prompt").style.visibility = "hidden";


						   getMethods();
   
   
					   }
					   emptyCart2(0, dict.cart.length);
					   //emptyCart(0, cart.length);

					//    document.getElementById("list").innerHTML = "";
					//    document.getElementById('purchase').innerHTML = '';
	   
	   
	   
				   })	
			}
		
 // Get Methods
 const getMethods = () =>{
	 // let's show the method buttons

	console.log(dict.cart.length)	
	document.getElementById("navigation").innerHTML =  '<div class="game" id="game">Play the garden game</div>';
	let gameStart = document.getElementById('game');

	gameStart.addEventListener("click", function(){
			// alert("Watering the plants");
			let e = 0;
			let t = 0;
		
			//  item.parentNode.removeChild(item);
	
			///return false;
			document.getElementById("navigation").innerHTML =  '<div  class="tend" id="tend">Tend</div>'+'<div class="harvest" id="harvest">Harvest</div>'+'<div class="water" id="water">Water</div>';
			let iconWater = document.getElementById('water');

			iconWater.addEventListener("click", function(){
				  let waterLimit =	e += 1;
					if(waterLimit <= 3){
						alert("Please keep watering your plant.");
						document.getElementById("showAction").innerHTML = '<p> watering #'+waterLimit+'</p>';
						console.log("watering #",waterLimit)
					}else if(t < 3){
						alert("Time to tend your garden.");
						document.getElementById("showAction").innerHTML = '<p>Time to tend your garden.</p>';

					}else{
						alert("Time to harvest!")
						console.log("Time to harvest!");
					}
				})
			const iconTend = document.getElementById('tend');
				iconTend.addEventListener("click", function(){
					let tendLimit =	t += 1;
					if(e < 1){
						alert("Please water your garden first.");
						document.getElementById("showAction").innerHTML = '<p>Please water your garden first.</p>';
					}
					else if(tendLimit <= 3){
						alert("Please keep tending your plants.");
						document.getElementById("showAction").innerHTML = '<p> tending #'+tendLimit+'</p>';
						console.log("tending #",tendLimit)
					}else if(e < 3){
						alert("Time to water your garden.");
						document.getElementById("showAction").innerHTML = '<p>Time to water your garden.</p>';

					}else{
						alert("Time to harvest!");
						console.log("Time to harvest!");		
					}
			})
	
			const iconHarvest =  document.getElementById('harvest');
			iconHarvest.addEventListener("click", function(){
				if(e < 3 && t < 3){
					alert("Please, water and tend your plants first.")
					document.getElementById("showAction").innerHTML = '<p> Please, water and tend your plants first.</p>';

				}else if(e >= 3 && t >= 3) {	
				document.getElementById("navigation").innerHTML ='<div id="congrats"></div>';
				setTimeout(function(){
					document.getElementById("congrats").innerHTML = `<h2>Currently harvesting the plants!</h2>`;	
					}, 1000);
				setTimeout(function(){
				document.getElementById("congrats").innerHTML =	`<h2>Congrats, You earned $${(Math.random() * 1000).toFixed(2)}!</h2>`;	
				t=0;
				e=0;
				}, 2000);
				setTimeout(function(){
					document.getElementById("congrats").innerHTML = "<h3>Play again?\nClick on items to cart to purchase!</h3>";	
					t=0;
					e=0;
				}, 4000);


				document.getElementById("showAction").innerHTML = "";	
				document.getElementById("congrats").innerHTML = "";	
				document.getElementById("growing").innerHTML ='';
				document.getElementById("growing-title").innerHTML ='';
				items = document.getElementById("data").style.visibility = "visible";
				document.getElementById("cart").style.visibility = "visible";
				document.getElementById("emptyCart").style.visibility = "visible";
				document.getElementById("prompt").style.visibility = "visible";
				}
	
			})
	
	})
 }


			
        // Hide Cart
               const hideList =() => { 
             
                   //reset counter 
                   e = 0;
                   for(let i = 0; i < getList.length; i++){
					document.getElementById("list").innerHTML = "";
					document.getElementById("navigation").innerHTML = "";
					document.getElementById("growing-title").innerHTML ="";
					document.getElementById("growing").innerHTML = "";
                    //  document.getElementById('notification').innerHTML = "";
                     show =  document.getElementById("list").style.visibility = "hidden";


                   }
                  
                return cart;
                }
              
            // Toggle element visibility
            seeds.addEventListener('click', function (e) {
				debugger
                   if(show == "hidden"){
				   showList(); 

                   }else if(cart.length < 0){
				   alert("Your cart is empty");
				   }else {
                   hideList();
                   }    
              });

        }
   
			//const picked = document.getElementsByClassName('picked');
		
		};




	}
	var submitted = document.getElementById('submit');

	submitted.onclick = function() {
		debugger
		query = mainInput.value;
		query1 = mainInput1.value;
		query2 = mainInput2.value;

        validate(query, query1, query2);

		return false;


	}
}
//cited images at google images 