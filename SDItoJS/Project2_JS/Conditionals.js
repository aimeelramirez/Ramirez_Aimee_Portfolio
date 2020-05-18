'use strict';

window.onload = () => {
  let input;
  const validateString = (input) => {
    while (input == "") {
      console.log(`Sorry input can not be empty`);
      alert('This can not be empty.');
      input = prompt(`Please enter the right data input`);

    }
    return input;
  }
  const validateInt = (parseInput) => {
    // set the NaN to have a value
    let isParsed = 0;

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
  const validateNaNDecimal = (parseInput) => {
    let convertInput = "";
    let checkNaN = Number.isNaN(parseFloat(parseInput));

    if (checkNaN == true) {
      convertInput = validateDecimal(parseInput);
    } else if (checkNaN != true) {
      convertInput = parseInput;
    }
    return convertInput;
  }
  const validateNaNInt = (parseInput) => {
    let convertInput = "";
    let checkNaN = Number.isNaN(parseInt(parseInput));
    //alert(parseInt(parseInput)+ "?" + parseInput);
    if (checkNaN == true || parseInt(parseInput) != parseInput || parseInput < 0) {
      convertInput = validateInt(parseInput);
    } else if (checkNaN != true || parseInput > -1 ) {
      convertInput = parseInput;
    }
    return convertInput;
  }


  ///------ Problem #1: Free Shipping----///

  let pInput1, convertDecimal;
  let parseInput, a;
  let d = 1.25;
 alert("Free Shipping:");
  pInput1 = prompt("How many items would you like to order?")
  parseInput = validateString(pInput1);
  convertDecimal = validateNaNInt(parseInput);
  if (convertDecimal > 4) {
    //“Congratulations,	you	have bought	# > 4 items, so	you	qualify	for	free shipping!”
    console.log("Congratulations, you have bought " + convertDecimal + ", so you qualify for free shipping!");
    document.getElementById("list").innerHTML += "Congratulations, you have bought " + convertDecimal + ", so you qualify for free shipping!";

  } else if (convertDecimal <= 4) {
    a = d * convertDecimal;
    document.getElementById("list").innerHTML +=  "Your cost for shipping today for " + convertDecimal + " items is $" + a.toFixed(2) + ".";

    console.log("Your cost for shipping today for " + convertDecimal + " items is $" + a.toFixed(2) + ".");
  }

  ///---- Problem #2: Mall Employee Discount ----///
  alert("Mall Employee Discount:");

  let pInputFirstItem2, convertDecimal1;
  let pInputSecondItem2, convertDecimal2;
  let person;
  let yes, no;

  pInputFirstItem2 = prompt("Let's add your first item cost here: ");
  parseInput = validateString(pInputFirstItem2);
  convertDecimal1 = validateNaNDecimal(parseInput);
  console.log("First Item Cost: " + convertDecimal1);
  /// this is second item ///
  pInputSecondItem2 = prompt("Let's add your second item cost here: ");
  parseInput = validateString(pInputSecondItem2);
  convertDecimal2 = validateNaNDecimal(parseInput);
  let totalFirstInput = parseFloat(convertDecimal1);
  let totalSecondInput =  parseFloat(convertDecimal2);
  console.log("Second Item Cost: " + parseFloat(totalSecondInput));
  //sum it together
  let sum = parseFloat(totalFirstInput)+ parseFloat(totalSecondInput);
  let total = sum.toFixed(2);
  console.log("This is total before asking if employee: " + total);


  // let's check if there is a no to yes to answer.
  //ok I need to know if the person is a customer or a works in the mall or not. 
  // so if yes the get the 10% if not they don't get the discount;
  person = prompt("Are you a customer or do you work in the mall? Type: " + "yes" + " or " + "no");
  parseInput = validateString(person);
  parseInput = person;
  // let's check if there is a no to yes to answer.
  yes = "yes";
  no = "no";
  if (person != yes) {
    //passing the total over
    console.log("This is total: " + total);
    // if person says no or not yes.
    console.log("The person said no! Be kind to customer.");
    document.getElementById("list").innerHTML += 
    "<h2>Mall Discount:</h2><hr/><li>$" + totalFirstInput.toFixed(2)+ "</li>" + 
    "<li>$" + totalSecondInput.toFixed(2)+ "</li>" +
    "<hr/><p>Total: $" + total + "</p>";
  } else if (person != no) {
    console.log("This person said yes!  this is a mall employee so please offer the discount");

    let tenOverHundred = 0.10;
    let tenPerent = total * tenOverHundred;
    let addTotal = total - tenPerent;
    
    let newTotal = addTotal.toFixed(2);

    console.log("Your total purchase is " + total + ",but with your 10% employee discount it is now " + newTotal);
    document.getElementById("list").innerHTML += 
  "<h2>Mall Discount:</h2><hr/><li>$" + totalFirstInput.toFixed(2)+ "</li>" + 
  "<li>$" + totalSecondInput.toFixed(2)+ "</li>" +
  "<hr/><p>Total: $" +  newTotal + "</p>";
  }
  
  ///----- Problem #3:	Apple Pickers ----///
  let pInput3;
  // i need to put the item;
  let produce, printString;
  document.getElementById("list").innerHTML += 
  "<h2>Apple Pickers:</h2><hr/>";
  alert("Apple Pickers:");
  // what is produce item?
console.log("What is your item you are weighting ?");
  produce = prompt("What is your item you are weighting ?");
  parseInput = validateString(produce);
  parseInput = produce;
  // weight of item/s?
 console.log("Let's weight the basket or item in the scale! \nPlease put the value of pounds/lbs in the input below:");
  pInput3 = prompt("Let's weight the basket or item in the scale! \nPlease put the value of pounds/lbs in the input below:");
  parseInput = validateString(pInput3);
  let numberInput3 = validateNaNDecimal(parseInput);
  //first comparison need to ask the weight is less than 7
  if (numberInput3 < 7) {
console.log("this is 1.00 per pound");
   let costPerPound1 = numberInput3.toFixed(2);
   document.getElementById("list").innerHTML += 
   "<h2>Apple Pickers:</h2><hr/>";
   printString ="Your basket of " + produce + " of " + numberInput3 + "lbs " + "costs " + costPerPound1 + ".";   //Up	To	But	Not	Including	7 lbs.
  } else if (numberInput3 < 15.25) {
console.log("this is 0.90 per pound");
   let row2 = numberInput3 * .90;
   // System.console.log("number lbs times .90: " + row2);
   let costPerPound2 = row2.toFixed(2);
   printString ="Your basket of " + produce + " of " + numberInput3 + "lbs " + "costs " + costPerPound2 + ".";
    } else if (numberInput3 < 40) {
console.log("this is 0.80 per pound");
   let row3 = numberInput3 * .80;
   // System.console.log("number lbs times .80: " + row3);
   let costPerPound3 = row3.toFixed(2);
   printString ="Your basket of " + produce + " of " + numberInput3 + "lbs " + "costs " + costPerPound3 + ".";
    } else if (numberInput3 >= 40 && numberInput3 < 70.5) {
console.log("this is 0.70 per pound");
   let row4 = numberInput3 * .70;
   //System.console.log("number lbs times .70: " + row4);
   let costPerPound4 = row4.toFixed(2);
   printString ="Your basket of " + produce + " of " + numberInput3 + "lbs " + "costs " + costPerPound4 + ".";
    } else if (numberInput3 >= 70.5 && numberInput3 <= 100) {
console.log("this is 0.60 per pound");
   let row5 = numberInput3 * .60;
   //System.console.log("number lbs times .60: " + row5);
   let costPerPound5 = row5.toFixed(2);
printString ="Your basket of " + produce + " of " + numberInput3 + "lbs " + "costs " + costPerPound5 + ".";
  } else if (numberInput3 > 100) {
 alert("Congrats! this is greater than 100 lbs! ");
console.log("Congrats! this is greater than 100 lbs! ");
console.log("this is 0.50 per pound");
   let row6 = numberInput3 * .50;
   // System.console.log("number lbs times .50: " + row6);
   let costPerPound6 = row6.toFixed(2);
   printString ="Your basket of " + produce + " of " + numberInput3 + "lbs " + "costs " + costPerPound6 + ".";  
  }
  document.getElementById("list").innerHTML += 
  printString+"<hr/>";
   ///---- Problem #4: Senior Citizen Discount ----///
   document.getElementById("list").innerHTML += 
   "<h2>Senior Discount:</h2><hr/>";
   alert("Senior Discount:");
   console.log("This is Senior Discount!");
  let customerInput;
   console.log("Hello, what is your age? Kindly type it  below: ");

   customerInput = prompt("Hello, what is your age? Kindly type it  below: ");
   parseInput = validateString(customerInput);
   let  numberCustomerInput = validateNaNInt(parseInput);
   if (numberCustomerInput <= 6 || numberCustomerInput >= 65) {
 console.log("Your cost for your ticket to Comic Con is $40.00.");
 document.getElementById("list").innerHTML += 
"<h3>Your cost for your ticket to Comic Con is $40.00</h3>";
   } else { 
 console.log("Your cost for your ticket to Comic Con is $55.00.");
 document.getElementById("list").innerHTML += 
 "<h3>Your cost for your ticket to Comic Con is $55.00</h3>";
   }


}