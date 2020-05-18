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
    alert("Sorry, this can only be valid number(s).")

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

    if (checkNaN == true || parseInput < 0) {
      convertInput = validateDecimal(parseInput);
    } else if (checkNaN != true || parseInput > -1) {
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

/// main extra project to be done. ///
            //---Problem #1 Piggy Bank---//
            let total = [];
            let parseInput;
            let numberInput;
            let bankAlreadyInIt;
            let handleBank = prompt("How much do you have already in the bank? : ");
    

            parseInput = validateString(handleBank);
            numberInput = validateNaNDecimal(parseInput);

            let cushion = parseFloat(numberInput);
            total.push(cushion);

            console.log(`thank you, you put for how much in your bank:  ${cushion.toFixed(2)}`);
            let handle = prompt("Please let me know how much you want to save in your bank: ")

            parseInput = validateString(handle);
            bankAlreadyInIt = validateNaNDecimal(parseInput);
            let savings = parseFloat(bankAlreadyInIt);
            total.push(savings);

            console.log(`thank you, you put how much you want to save: ${savings.toFixed(2)}`);

                // this is adding both of that together to total inital savings
                let sum = total.reduce((a, b) => {
                    return a + b;
                });
                let newTotal = parseFloat(sum).toFixed(2);
                document.getElementById("list").innerHTML += "<hr/><h3>Piggy Bank:</h3><h2> " + "You are starting with: $" + newTotal + " in your piggy bank for the #1 month." + "</h2>";

                //running the loop now.
               
                let year = 12;
                for (let run = 0; run <= year; run++)
                { 
                    cushion += savings;
                    let yearTotal  = parseFloat(cushion).toFixed(2);
                    console.log("This is month you now have " + yearTotal + " in your piggy bank!");


                if (run > 0) {

                        if (run > 0)
                        { 
                            let newIndex = run + 1;

                            if(newIndex > 12){
                                break;
                            }else{
                            //“This    month   you now have    SX in   your    piggy   bank!”
                            document.getElementById("list").innerHTML +=  "<h4> #" + newIndex +  " month of the year, you'll have $" + yearTotal + " in your piggy bank!" + "</h4>";
                            }
                        }
                   }
                }
                //---Problem #2 3,2,1 Blast Off!---//
                let countDown;
                let input2;
                let replace;
                document.getElementById("list").innerHTML +=  "<h1> 3,2,1 Blast Off! </h1>";

                console.log("Please put the starting number for countdown: ");
                input2 = prompt("Please put the starting number for countdown: ");
               // bool inputValidation = double.TryParse(input2, out replace);
               parseInput = validateString(input2);
               replace = validateNaNDecimal(parseInput);


                console.log("Your countdown number to start with is: " + replace + "!");
    
                if (replace > 0)
                {
                    for (countDown = replace; countDown >= 0; countDown--)
                    {
                        console.log(countDown);
                        document.getElementById("list").innerHTML +=  "<h4> " + countDown + "</h4>";

                    }
                    document.getElementById("list").innerHTML +=  "<h1> Blast Off! </h1>";

                    console.log("Blast Off!");
                }

 document.getElementById("list").innerHTML +=  "<h1> Darn Good Donuts! </h1>";
  let boxOfDonuts, pickDonuts;
  let donutsPicked;
  let donutsAmount;
  console.log("Please type the number of donuts in the box:");
  boxOfDonuts = prompt("Please type the number of donuts in the box:");
  parseInput = validateString(boxOfDonuts);
  donutsAmount = validateNaNDecimal(parseInput);
 console.log(donutsAmount);
 
 let remainder = 0;
        //giving testing variables
        let testValueDonutsPickedLimit = 3;
        let testValueDonutsNegOne = -1;
        let testValueDonutsNegTwo = -2;
        while (donutsAmount > 0) 
        {
 console.log("How many donuts would you like to eat?  \n  0-3 are valid choices");
 pickDonuts = prompt("How many donuts would you like to eat?  \n  0-3 are valid choices");
 parseInput = validateString(pickDonuts);
 donutsPicked = validateNaNInt(parseInput);
 let prompt1,prompt2;
        if (donutsPicked <= testValueDonutsPickedLimit)
        {
            donutsAmount -= donutsPicked;

            if (donutsAmount == testValueDonutsNegOne || donutsAmount == testValueDonutsNegTwo)
            {
                if (donutsAmount == testValueDonutsNegOne)
                {
                    prompt2 =  `Sorry I ran out of donuts, I will have to owe you ${donutsAmount + 2} donuts tomorrow.`;
                    console.log(prompt2);
                    document.getElementById("list").innerHTML +=  "<h3>"+ prompt2 + "</h3>";

                }
                else if (donutsAmount == testValueDonutsNegTwo)
                {

                    prompt2 = `Sorry I ran out of donuts, I will have to owe you ${donutsAmount + 4} donuts tomorrow.`;
                    console.log(prompt2);
                    document.getElementById("list").innerHTML +=  "<h3>"+ prompt2 + "</h3>";

                }
            }else if(donutsAmount > 0){
          
                console.log("There are " + donutsAmount + " donut(s) left in the box.");
                document.getElementById("list").innerHTML +=  "<p>There are " + donutsAmount + " donut(s) left in the box.</p>";

            }else{
                break;
            }
            if (remainder == donutsAmount)
            {
                console.log("Donuts are all gone, hope everyone enjoys them!");
                document.getElementById("list").innerHTML +=  "<h3>Donuts are all gone, hope everyone enjoys them!</h3>";

            }
        }else{
            console.log("That is too many donuts, try again.");
            alert("That is too many donuts, try again.");
        }

    }
}