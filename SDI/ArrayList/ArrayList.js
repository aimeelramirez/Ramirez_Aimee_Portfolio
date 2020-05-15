'use strict'
window.onload = function() {

// let inputWantingToBuy;
// let numberWantingToBuy;
let input, parseInput;
let isParsed, isBookParsed; 
let answer, answerBook;
let total = [];
 //now to add the number of the array
 let stringArray = [];
 let sum = 0;
//validate string
const validateString = (input) =>{
    while(input == ""){
        console.log(`Sorry input can not be empty`);
        alert('This can not be empty.');
        input = prompt("how many books would you like to purchase?");
    
    }
    return input;
}
const validateInt = (parseInput, isParsed) =>{
 //console.log(isParsed +"check 1" + parseInput)
  // set the NaN to have a value
   isParsed = 0;
   
   console.log("Sorry, this can only be a whole number.")
   alert("Sorry, this can only be a whole number.")

    while(parseInput != isParsed){
    //console.log(isParsed +"check 2" + parseInput)

    input = prompt("how many books would you like to purchase? (Please input a whole number like 1, 3, or 5)")
    parseInput = validateString(input);
    isParsed = parseInt(parseInput);

    }
   // console.log(isParsed +"check 3" + parseInput)
    return isParsed;

}
const validateDecimal = (inputBookPrice) =>{
    //console.log(isParsed +"check 1" + parseInput)
     // set the NaN to have a value
     isBookParsed = 0.0;
      //let check = !isNaN(parseFloat(inputBookPrice));
      //let checkIn = isFinite(inputBookPrice);
      console.log("Sorry, this can only be a number.")
      alert("Sorry, this can only be a number.")
   
       while(inputBookPrice != isBookParsed){
      //  console.log(inputBookPrice +" before ** check book decimal" + isBookParsed)

       inputBookPrice = prompt(`Please, enter the price again, like 2 for $2 or $2.00:`);
       parseInput = validateString(inputBookPrice);
       isBookParsed = parseFloat(parseInput);
       //console.log(inputBookPrice +" after ** check book decimal" + isBookParsed)

       }
      // console.log(isParsed +"check 3" + parseInput)
       return isBookParsed;
   
   }

const addBooks = (answer) =>{

 console.log(`Great you wanted these number of books: ${answer}`);

    for(let a = 0; a < answer; a++){

       // console.log(answer+ "check!!" + isParsed);
      let inputBookPrice = prompt(`Please, enter the ${a+1} price as a like 2 for $2 or $2.00:`);
     //check if empty
      parseInput = validateString(inputBookPrice);
      let checkNaNBook = Number.isNaN(parseFloat(parseInput));
      
       //console.log(parseInput + "->" + checkNaNBook);
      if(checkNaNBook == true){

        //console.log(a + "# wrong data types caught");

          //check if it is a decimal
         isBookParsed = validateDecimal(parseInput);
          //after passing prompt push it into the array
          stringArray.push(isBookParsed);
          console.log(stringArray + " array string false");
          total.push(isBookParsed);
      
      } 
      else if(checkNaNBook != true) {
      total.push(parseFloat(parseInput));
    }
    
    //console.log(total+ " total array to add up");
    
    //reduce to sum it up
     sum = total.reduce((a, b) =>{
        return a + b;
    });
    
    console.log(parseFloat(sum).toFixed(2)+ "sum total");
    console.log(`price of book #${a+1} $${total[a].toFixed(2)}`);
     console.log(`sum of all books $${sum.toFixed(2)}`);
     document.getElementById("listPrice").innerHTML +=  `${a+1}`+") $"+ total[a].toFixed(2) +"<br/>";


      }
      document.getElementById("sum").innerHTML += "<hr/><h3>Total:</h3><h2> $"+ sum.toFixed(2) +"</h2>";



    }


input = prompt("how many books would you like to purchase? (Please input a whole number like 1, 3, or 5)")
parseInput = validateString(input);
isParsed = parseInt(parseInput);

if(parseInput == isParsed ){
    //console.log(isParsed + ":" + parseInput)
   //if equal than no reason to int check
    console.log(`Great you wanted these number of books: ${parseInput}`);
    alert(`Great you wanted these number of books: ${parseInput}`);
    document.getElementById("name").innerHTML += "<h3> Great! you wanted these number of books: "+ parseInput +"</h3>";
    answer = isParsed;
    answerBook = addBooks(answer);


 }else if(isParsed != parseInput){
     //check the NaN
    // console.log(isParsed + ":" + parseInput)

    let checkNaN = Number.isNaN(isParsed);
    // check undefined
    if(isParsed == undefined || checkNaN == true){

           // console.log('ERROR!');
            answer = validateInt(parseInput, isParsed);
            document.getElementById("name").innerHTML += "<h3> Fantastic! you wanted these number of books: "+  answer +"</h3>";
            answerBook = addBooks(answer);
    }

 }
 var stringFruits = ["grapes", "apples", "limes", "lemon", "ball", "carrot", "towel", "laptop", "stove"];
 var colors = ["purple", "red", "green", "yellow", "red", "orange", "white", "silver", "black"];
 for (let j = 0; j < stringFruits.length; j++)
 {
   
     console.log("The main color of " + stringFruits[j] + " is " + colors[j] + ".");
     document.getElementById("randomThingsList").innerHTML += " <p>"+ "The main color of " + stringFruits[j] + " is " + colors[j] + "." +"</p>";

 }

   
}