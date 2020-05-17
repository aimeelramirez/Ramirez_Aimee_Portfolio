'use strict'
window.onload = function() {
	console.log("Welcome to Shirt Sizes!\nThese are shirts to be sorted.");
	var shirtOrders = [
		"Medium", //2
		"Small", // 3
		"X-Large", //2
		"Small", //
		"Large", //1
		"Medium", //
		"Small", //
		"X-Large", //
		"XX-Large" //1
	];
	let smallCounter = 0;
	let medCounter = 0;
	let larCounter = 0;
	let xLarCounter = 0;
	let xXLarCounter = 0;

	let storeSm = " ";
	let storeMed = " ";
	let storeLar = " ";
	let storeXLar = " ";
	let storeXXLar = " ";

	for (let y = 0; y < shirtOrders.length; y++) {
		if (shirtOrders[y] == "Small") {
			smallCounter += 1;
			// if (y > 0) {
			storeSm = shirtOrders[y];
			//}
		}
		if (shirtOrders[y] == "Medium") {
			medCounter += 1;
			// if (y > 0) {
			storeMed = shirtOrders[y];
			//}
		}
		if (shirtOrders[y] == "Large") {
			larCounter += 1;
			// if (y > 0) {
			storeLar = shirtOrders[y];
			// }

		}
		if (shirtOrders[y] == "X-Large") {
			xLarCounter += 1;
			// if (y > 0) {
			storeXLar = shirtOrders[y];
			// }

		}
		if (shirtOrders[y] == "XX-Large") {
			xXLarCounter += 1;
			// if (y > 0) {
			storeXXLar = shirtOrders[y];
			// }

		}

	}
	console.log(`Order ${smallCounter} ${storeSm} Shirt(s)`);
	console.log(`Order ${medCounter} ${storeMed} Shirt(s)`);
	console.log(`Order ${larCounter} ${storeLar} Shirt(s)`);
	console.log(`Order ${xLarCounter} ${storeXLar} Shirt(s)`);
	console.log(`Order ${xXLarCounter} ${storeXXLar} Shirt(s)`);
	//var stringList = [{smallCounter, storeSm},{medCounter, storeMed}];

	document.getElementById("list").innerHTML =
		"<hr/><p>Order " + smallCounter + ", " + storeSm + " Shirt(s)</p>" +
		"<hr/><p>Order " + medCounter + ", " + storeMed + " Shirt(s)</p>" +
		"<hr/><p>Order " + larCounter + ", " + storeLar + " Shirt(s)</p>" +
		"<hr/><p>Order " + xLarCounter + ", " + storeXLar + " Shirt(s)</p>" +
		"<hr/><p>Order " + xXLarCounter + ", " + storeXXLar + " Shirt(s)</p>";




}