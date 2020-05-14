'use strict'
window.onload = function() {

// let inputWantingToBuy;
// let numberWantingToBuy;
let input, parseInput;
let isParsed; 
let answer;
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

input = prompt("how many books would you like to purchase? (Please input a whole number like 1, 3, or 5)")
parseInput = validateString(input);
isParsed = parseInt(parseInput);

if(parseInput == isParsed ){
    
    console.log(`Great you wanted these number of books: ${parseInput}`);
    alert(`Great you wanted these number of books: ${parseInput}`);
    document.getElementById("name").innerHTML += "<h3> Great! you wanted these number of books: "+ parseInput +"</h3>";
   
    for(let a = 0; a < isParsed; a++){
        let inputBookPrice = prompt(`Please, enter the ${a+1} price as a like 2 for $2 or $2.00:`);
        stringArray.push(+inputBookPrice);
       //console.log(stringArray[a]+ "\n");
       total.push(+parseFloat(stringArray[a]).toFixed(2));
       sum += total[a];
       let index = a+1;
       console.log(`price of book #${a+1} $${parseFloat(stringArray[a]).toFixed(2)}`);
       document.getElementById("listPrice").innerHTML += index +") $"+ total[a].toFixed(2) +"<br/>";
    }
    console.log(`sum of all books $${sum.toFixed(2)}`);

    document.getElementById("sum").innerHTML += "<hr/><h3>Total:</h3><h2> $"+ sum.toFixed(2) +"</h2>";


 }else if(isParsed != parseInput){
     //check the NaN
    let checkNaN = Number.isNaN(isParsed);
    // check undefined
   // console.log(isParsed + ":" + parseInput)
    if(isParsed == undefined || checkNaN == true){

            console.log('ERROR');
            answer = validateInt(parseInput, isParsed);
            document.getElementById("name").innerHTML += "<h3> Fantastic! you wanted these number of books: "+  answer +"</h3>";
            console.log(`Great you wanted these number of books: ${answer}`);
 
  for(let a = 0; a < answer; a++){
     let inputBookPrice = prompt(`Please, enter the ${a+1} price as a like 2 for $2 or $2.00:`);
  
        stringArray.push(+inputBookPrice);
        console.log(stringArray[a]);
        //validate int
       //total += parseInt(stringArray[a]);
       total.push(+parseFloat(stringArray[a]).toFixed(2));
       sum += total[a];
       console.log(`price of book #${a+1} $${parseFloat(stringArray[a]).toFixed(2)}`);

       console.log(`sum of all books $${sum.toFixed(2)}`);
       document.getElementById("listPrice").innerHTML += index +") $"+ total[a].toFixed(2) +"<br/>";
        document.getElementById("sum").innerHTML += "<hr/><h3>Total:</h3><h2> $"+ sum.toFixed(2) +"</h2>";

      }
    }else{
        console.log('ERROR');
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
