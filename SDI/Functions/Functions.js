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
    
    function DiscountCalc(parDiscountCost, parDiscountVar)
      {

          //It should take in the original price 
          //get the org price from input parsedDiscountCost
         // let discountPercentage = parDiscountCost/ 100;
          //and the array element variable 
          //  convert the parDiscountVar/ 100 to get the dec total
          let getDiscountVar = parDiscountVar / 100;
          let timesDiscount = parDiscountCost * getDiscountVar;
          let minusDiscountFromCost = parDiscountCost - timesDiscount;
          return minusDiscountFromCost;

      }
      function GetWeight(parAstro,parWeight)
      { 
      //So you would send it the original weight...
      //and return the weight on that planet
          let weight = parWeight / 100;

          //the "multiplier" for the weight on 
          let multiplier = parAstro * weight;
          let totalWeight = multiplier.toFixed(2);
          return totalWeight;
      }
      //Return Value From Custom Function:
     function GetNumber(parCost)
      {
          //Amount converted to American Dollars.
          let convert = 1.16;
          let total = parCost * convert;
          return total;

      }
                  //---Problem #1:Currency Convertor---//

            //PrintMore();
            alert("Currency Convertor:");
            //let parsingCost;
            console.log("Put the amount of Euros here:");
            // 1 Euro is worth 1.16 American Dollar
            let input;
            //validate the input upon currency
            input = prompt("Put the amount of Euros here:");
            parseInput = validateString(input);

            let isParsed = validateNaNDecimal(parseInput);
            // //Ask & Validate In Main Method
            // while (!isParsed)
            // {

            //     console.log("this is not the right output, please try again");
            //     input = prompt();
            //     isParsed = validateNaNDecimal(parseInput);
            // }
            //Use As Arguments
            let results = GetNumber(isParsed);
            //Then do your final output in the Main.
            //Your output should be rounded to 2 let places.
            //You can use Math.Round or .ToString.
            let grandTotal = results.toFixed(2);
            //Result To Print To The Console In The Main Method:
            let printTotal = `${isParsed} euros converted to dollars is $${grandTotal}`;
            console.log(printTotal);
            document.getElementById("list").innerHTML += 
            "<h2>Currency Converter</h2><p>"+printTotal+"</p>" ;
            /* Tested in Calculator and on Project
                Put the amount of Euros here:
                5.50
                results: 5.50 euros converted to dollars is $6.38
                               
                Put the amount of Euros here:
                15.32
                results: 15.32 euros converted to dollars is $17.77
            */
            //--Problem #2:Astronomical --//
            alert("Astronomical:");
            //Ask & Validate In Main Method
            console.log("Put Astronaut's weight on Earth (in pounds): ");
            let inputAstronaut;
            inputAstronaut = prompt("Put Astronaut's weight on Earth (in pounds):");
            parseInput = validateString(inputAstronaut);

            let isAstronomicalParsed = validateNaNDecimal(parseInput);
            console.log("Thank you this is input for Astronaut:" + isAstronomicalParsed);
            alert("Thank you this is input for Astronaut! " + isAstronomicalParsed);

           // let isAstronomicalParsed;

            let planets = ["Mercury","Venus", "Earth", "Mars", "Jupiter", "Saturn","Uranus","Neptune" ];
            //1        //2        //3       //4     //5      //6       //7     //8
            // while (!isAstronomicalParsed)
            // {

            //     console.log("Sorry this is not the right input for number of Planet to be chosen, try again");
            //     inputAstronaut = prompt();
            //     isAstronomicalParsed = decimal.TryParse(inputAstronaut, out isAstronomicalParsed);
            // }

            /*Tested:
             * Astronaut’s Weight – 210 Planet Choice -9....
             * (Re-prompt because not a valid choice) , New Choice - 5           
             * if the parsingPlanet is greater than 8 that to catch           
            */
           //Menu 
          let counter = 0;
          console.log("Menu of Planets:");
           for(let x = 0; x < planets.length; x++){

            counter += 1;
            console.log(counter + " : " + planets[x]);
            alert( counter + " : " + planets[x]);
           }
            console.log("Enter number of Planet:");
            let inputPlanet = prompt("Enter number of Planet:");
            parseInput = validateString(inputPlanet);

            let  isPlanetParsed = validateNaNInt(parseInput);

          
            while (!isPlanetParsed || isPlanetParsed > 8 ||  isPlanetParsed > 8)
            {
              isPlanetParsed = validateNaNInt(parseInput);

            }
               let selection =  isPlanetParsed - 1;
                let times;
                let storeTimes = "";
                //Console.Write("Selection :{0}", selection);
                if (planets[selection] == "Mercury")
                {
                //  Console.Write("Planet Selection :{0}", planets[selection]);
                    if(selection >= 0){

                    times = GetWeight(38, isAstronomicalParsed);
                    storeTimes += times;
                    //console.log(`On Earth you weight ${isAstronomicalParsed} lbs, but on ${planets[selection]} you would weigh ${storeTimes} lbs.`);

                   }
                    
                    /* Tested: 1
                     * Mercury                  
                     * 38/100 = 38% = .38                   
                     * 160 * .38 = 60.8lbs                   
                     *                    
                    */
                }
                else if (planets[selection] == "Venus")
                {
                   if(selection > 0){

                    times = GetWeight(91, isAstronomicalParsed);
                    storeTimes += times;
                   }
                  //console.log("On Earth you weight {0} lbs, but on {1} you would weigh {2} lbs.", isAstronomicalParsed, planets[selection], storeTimes);
                   
                    /*Tested: 2
                     * Venus 
                     * 91/100 = 91% = .91;
                     * 160 * .91 = 145.6lbs                    
                    */
                }
                
                else if (planets[selection] == "Earth")
                {   
                     if(selection > 0){

                     times = GetWeight(100, isAstronomicalParsed);
                     storeTimes += times;
                   }
                 // console.log("On Earth you weight {0} lbs, but on {1} you would weigh {2} lbs.", isAstronomicalParsed, planets[selection], storeTimes);
                                    
                   /*Tested: 3
                     * Earth
                     * 100/100 = 100% = 1;
                     * 160 * 1 = 160lbs
                    */
                }
                else if (planets[selection] == "Mars")
                {
                    if(selection > 0){

                    times = GetWeight(38, isAstronomicalParsed);
                    storeTimes += times;
                   }
                ///  console.log("On Earth you weight {0} lbs, but on {1} you would weigh {2} lbs.", isAstronomicalParsed, planets[selection], storeTimes);
                                      
                    /*Tested: 4
                     * Mars
                     * 38/100 = 38% = .38;
                     * 160 * .38 = 60.8lbs                 
                     */
                }
                else if (planets[selection] == "Jupiter")
                {
                    if(selection > 0){ 

                    times = GetWeight(234, isAstronomicalParsed);
                    storeTimes += times;
                   }
                 // console.log("On Earth you weight {0} lbs, but on {1} you would weigh {2} lbs.", isAstronomicalParsed, planets[selection], storeTimes);
                
                   /*Tested: 5
                     * Jupiter
                     * 234/100 = 234% = 2.34
                     * 160 * 2.34 = 374.4lbs                   
                    */
                }
                else if (planets[selection] == "Saturn")
                {
                    if(selection > 0){

                    times = GetWeight(93, isAstronomicalParsed);
                    storeTimes += times;
                   }
                 // console.log("On Earth you weight {0} lbs, but on {1} you would weigh {2} lbs.", isAstronomicalParsed, planets[selection], storeTimes);
                  
                    /* Tested: 6
                     * Saturn
                     * 93/100 = 93% = .93;
                     * 160 * .93 = 148.8lbs                    
                   */
                }
                else if (planets[selection] == "Uranus")
                {
                    if(selection > 0){

                    times = GetWeight(92, isAstronomicalParsed);
                    storeTimes += times;
                   }
                  //console.log("On Earth you weight {0} lbs, but on {1} you would weigh {2} lbs.", isAstronomicalParsed, planets[selection], storeTimes);
           
                    /*Tested: 7
                     * Uranus
                     * 92/100 = 92% = .92;
                     * 160 * .92 = 147.2lbs                   
                    */
                }
                else if (planets[selection] == "Neptune")
                {
                    if(selection > 0){

                    times = GetWeight(112, isAstronomicalParsed);
                    storeTimes += times;
                   }
                  //console.log("On Earth you weight {0} lbs, but on {1} you would weigh {2} lbs.", isAstronomicalParsed, planets[selection], storeTimes);
                  
                 /*Tested: 8
                     * Neptune
                     * 112/100 = 112% = 1.12;
                     * 160 * 1.12 = 179.2lbs                   
                    */

              //  }
                /* Tested:
                 * On Earth you weight 210 lbs, but on Jupiter you would weigh 491.4 lbs.”
                 * Retested: All values for each planet and has been double checked with calculator with Tested tests.*/

            }
            let printPlanets =`On Earth you weight ${isAstronomicalParsed} lbs, but on ${planets[selection]} you would weigh ${storeTimes} lbs.`;
            console.log(`On Earth you weight ${isAstronomicalParsed} lbs, but on ${planets[selection]} you would weigh ${storeTimes} lbs.`);

            document.getElementById("list").innerHTML += 
            "<h2>Astronomical:</h2><p>"+printPlanets+"</p>" ;

            //--Problem #3:Dramatic Discounts --//
            /*In this problem, the user will give the program a price and it will tell the user what the cost will be with different discounts applied.
            In the Main, create an array of standard discount percentages. They will be 5, 10, 15, 20, 25 and 30. This array will be hard-coded and will not come from the user.
            Now prompt the user for the price of an item. Make sure to validate this and convert it to the right variable data type for currency.
             */
            alert("Dramatic Discounts:");
            document.getElementById("list").innerHTML += 
            "<h2>Dramatic Discounts:</h2>" ;
            let inputDiscount;
            //let parsedDiscount;
            console.log("Enter a item price:");
            inputDiscount = prompt("Enter a item price:");
            parseInput = validateString(inputDiscount);

            let isDiscountParsed = validateNaNDecimal(parseInput);
           
            let prettyDiscount = parseFloat(isDiscountParsed);
            // make the price look pretty in printing out
            console.log("Original Cost: $" + prettyDiscount);
            console.log("Results:");

            while (!isDiscountParsed && isDiscountParsed >= 0)
            {

                isDiscountParsed = validateNaNInt(parseInput);
            }

            // let because to easily convert it if so.

            let dramaticDiscount = [5, 10, 15, 20, 25, 30];
            for (let j = 0; j < dramaticDiscount.length; j++){

                if (j >= 0){

                    let getDiscountCalc = DiscountCalc(isDiscountParsed, dramaticDiscount[j]);
                    let totalDiscount = parseFloat(getDiscountCalc);
                    let stringPrintDiscount = `$${prettyDiscount.toFixed(2)} with a ${dramaticDiscount[j]}% discount is $${ totalDiscount.toFixed(2)}.`;
                    console.log(stringPrintDiscount);
                    document.getElementById("list").innerHTML += 
                    "<p>"+stringPrintDiscount+"</p>" ;
                }

            }
            /*Tested:
                     * Test 1-                   
                     * Enter a item price:
                         10
                        Original Cost: $10.00
                          $10.00 with a 5% discount is $9.50.
                          $10.00 with a 10% discount is $9.00.
                          $10.00 with a 15% discount is $8.50.
                          $10.00 with a 20% discount is $8.00.
                          $10.00 with a 25% discount is $7.50.
                          $10.00 with a 30% discount is $7.00.

                         Tested:
                         Test 2 -
                         Original Cost: $17.99
                            Results:
                             $17.99 with a 5% discount is $17.09.
                             $17.99 with a 10% discount is $16.19.
                             $17.99 with a 15% discount is $15.29.
                             $17.99 with a 20% discount is $14.39.
                             $17.99 with a 25% discount is $13.49.
                             $17.99 with a 30% discount is $12.59.

                        Tested and checked as going the output to be calculated for 
                        array for each over 100 to be calculated, completed test 1 & 2
                          
                        */

}