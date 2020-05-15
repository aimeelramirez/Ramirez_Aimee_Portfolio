'use strict'

window.onload = () =>{
    console.log("Es6");

    let parseInput;
    const validateString = (input) =>{
        while(input == ""){
            console.log(`Sorry input can not be empty`);
            alert('This can not be empty.');
            input = prompt(`Please enter the right data input`);
        
        }
        return input;
    }
    const validateInt = (parseInput, isParsed) =>{
         // set the NaN to have a value
          isParsed = 0;
          
          console.log("Sorry, this can only be a whole number.")
          alert("Sorry, this can only be a whole number.")
       
           while(parseInput != isParsed){
       
           input = prompt(`Please enter the right data input`);
           parseInput = validateString(input);
           isParsed = parseInt(parseInput);
       
           }
           return isParsed;
       
       }

       const validateDecimal = (input) =>{
         // set the NaN to have a value
          let isParsed = 0.0;
          console.log("Sorry, this can only be a number(s).")
          alert("Sorry, this can only be a number(s).")
       
           while(input!= isParsed){
    
           input= prompt(`Please enter the right data input`);
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
    
        if (checkNaN == true) {
          convertInput1 = validateInt(parseInput);
        } else if (checkNaN != true) {
          convertInput = parseInput;
        }
        return convertInput;
      }

   let salesTax;
   let input, input2, input3;
   let convertInput, convertInput2, convertInput3;
   let convertBanana, convertBeef, convertApple;
   let banana, applePie, beefBrisket;
   console.log("In Grocery Store: ... Please input each price for item  in grocery store!");
   alert("In Grocery Store: ... Please input each price for item  in grocery store!");
   console.log("Cost of an Banana:" + "\nBanana:");
   banana = prompt("Cost of an Banana:" + "\nBanana:");
   parseInput = validateString(banana);
   convertBanana = validateNaNDecimal(parseInput);

   console.log("Cost of a Beef Brisket:" + "\nBeef Brisket:");
   beefBrisket = prompt("Cost of a Beef Brisket:" + "\nBeef Brisket:");
   parseInput = validateString(beefBrisket);
   convertBeef =validateNaNDecimal(parseInput);
   console.log("Cost of Apple Pie:" + "\nApple Pie:");
   applePie = prompt("Cost of Apple Pie:" + "\nApple Pie:");
   parseInput = validateString(applePie);
   convertApple =validateNaNDecimal(parseInput);

   console.log("Quantity of Bananas: ");
   input = prompt("Quantity of Bananas: ");
   parseInput = validateString(input);
   convertInput = validateNaNDecimal(parseInput);

   let amount = convertInput * convertBanana;
   let convertAmount = amount.toFixed(2);

   console.log("Quantity of Beef Brisket: ");
   input2 = prompt("Quantity of Beef Brisket: ");
   parseInput = validateString(input2);
   convertInput2 = validateNaNDecimal(parseInput);

   let amount2 = convertInput2 * convertBeef;
   let convertAmount2 = amount2.toFixed(2);

   console.log("Quantity of Apple Pie: ");
   input3 = prompt("Quantity of Apple Pie: ");
   parseInput = validateString(input3);
   convertInput3 = validateNaNDecimal(parseInput);


   let amount3 = convertInput3 * convertApple;
   let convertAmount3 = amount3.toFixed(2);

   //give them what they asked for upon request
   let printStringBanana ="Amount Bananas you picked: " + input + " will cost you $" + convertAmount;
   let printStringBeef ="Amount Beef Brisket you picked: " + input2  + " will cost you $" + convertAmount2;
   let printStringApple = "Amount Apples you picked: " + input3 + " will cost you $" + convertAmount3;
   console.log(printStringBanana);
   console.log(printStringBeef);
   console.log(printStringApple);
   document.getElementById("list").innerHTML += 
   "<p>"+printStringBanana+"</p>" +
   "<p>"+printStringBeef+"</p>"+
   "<p>"+printStringApple+"</p>" ;

   // oops, got to make sure the tax is totaled with subtotal. 
   console.log("Please select your tax input if 7% type 7 etc:  ");
   let salesTaxInput = prompt("Please select your tax input if 7% type 7 etc:  ");
   parseInput = validateString(salesTaxInput);
   let convertSalesTaxInput  = validateNaNDecimal(parseInput);

   salesTax = convertSalesTaxInput / 100;
   //what tax did you input.
   console.log("Sales Tax in My Area: " + convertSalesTaxInput +"%");
   //calculated the subtotal.
   let subtotal = amount + amount2 + amount3;
   let convertSubtotal = subtotal.toFixed(2);
   console.log("subtotal:  " + convertSubtotal);
   //tax total is the input over hundred times the subtotal. 
   let taxTotal = subtotal * salesTax;
 
   let convertGrandTaxTotal =  taxTotal.toFixed(2);

   console.log("this is tax total of subtotal: $" + convertGrandTaxTotal );

   // what is the total with tax and subtotal.
   let total = subtotal + taxTotal;
   //grand total is with the rounding off to the nearest cent. 
  // let grandTotal = Math.Round(total, 2);
   let grandTotal = total.toFixed(2);
   console.log("grand total: $" + grandTotal + "!");
   document.getElementById("total").innerHTML += 
   "<p>"+"Sales Tax in My Area: " + convertSalesTaxInput +"%"+"</p>"+
   "<p>"+"Subtotal:  $" + convertSubtotal+"</p>" +
   "<p>"+"Tax total of subtotal: $" + convertGrandTaxTotal +"</p>" +
   "<p>"+"Grand total: $" + grandTotal + "!"+"</p>" ;

    
    }