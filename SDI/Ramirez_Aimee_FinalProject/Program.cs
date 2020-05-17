using System;


namespace Ramirez_Aimee_FinalProject {

 class Program {

  static void Main(string[] args) {

   /*b. Validate that this text string is not left blank.
   3. Still in the Main, split the text string of the cookie types into a string array with each
   individual cookie type in its own array element.
   a. Make sure to remove any spaces before or after the cookie type itself.
   i. This is often overlooked! You will need to use a string method in order to
   trim away the leading and trailing spaces. */

   Console.WriteLine("Welcome to the Cookie Counter program!\nWe are going to calculate the profit that you will make when selling individual cookies out of a pack of cookies.");
   string input;
   //This is prompting the list to be formed.
   Console.WriteLine("Please enter a comma separated list of types/flavors of each cookie package you are going to buy:");
   input = Console.ReadLine();
   while (string.IsNullOrWhiteSpace(input)) {
     
    Console.WriteLine("Please do not leave this blank.");
    Console.WriteLine("Please enter a comma separated list of types/flavors of each cookie package, try again.");
    input = Console.ReadLine();
   }
   //This splits the commas out.
   string[] splitNames = input.Split(",");
   // this is arg for cost 
   string[] emptyArray = new string[splitNames.Length];
   for (int i = 0; i < splitNames.Length; i++) {

    string sentence = string.Concat(splitNames[i]);
    string trimNames = sentence.Trim();
    emptyArray[i] += trimNames;
   }
   /// --- FIRST FUNCTION PASSING VALUE---///
   decimal[] times = PromptCookieCosts(emptyArray);
   /// --- SECOND FUNCTION PASSING VALUE---///
   decimal totalCookie = TotalCookieCost(times);

   //Console.WriteLine("this is total cookie from function: {0}", totalCookie);
   //This is checking the total in loop to be handled.
   /*6. Now you will ask the user for 2 more pieces of information, making sure you validate
   and convert each one to a correct data type.
   a. Prompt the user for number of cookies in each package.
   i. Assume all packages contain the same number of cookies
   b. Prompt the user for the cost they will sell 1 individual cookie for */

   Console.WriteLine("Please enter the number of individual cookies that are in each package: (As a whole number.)");
   string inputIndividualCookie;
   inputIndividualCookie = Console.ReadLine();
   int numberIndividualCookie;
   while (string.IsNullOrWhiteSpace(inputIndividualCookie) || !int.TryParse(inputIndividualCookie, out numberIndividualCookie)) {

    Console.WriteLine("Please only enter positive whole numbers.");
    inputIndividualCookie = Console.ReadLine();
   }
   //This gets the price per cookie.
   Console.WriteLine("What is the selling price for 1 individual cookie?");
   string inputPriceCookie;
   inputPriceCookie = Console.ReadLine();
   decimal parsePriceCookie;
   while (string.IsNullOrWhiteSpace(inputPriceCookie) || !decimal.TryParse(inputPriceCookie, out parsePriceCookie)) {

    Console.WriteLine("Please only enter a price.");
    inputPriceCookie = Console.ReadLine();
   }
   decimal getTotalPrice;
   /// --- THIRD FUNCTION PASSING VALUE---///
   getTotalPrice = AmountSoldFor(splitNames.Length, numberIndividualCookie, parsePriceCookie);

   /*8. In the Main calculate the profit that the user will make if they sell all of the cookies.
   a. Remember profit is the amount you sell them for minus the amount you
   purchased them for.
   9. The final output to the user should be done in the Main and follow this format.
   a. “You will make $W, if you sell all X cookie types, assuming each package of
   cookies contains Y pieces for $Z per cookie.”
   i. W is a formatted text string that contains the profit rounded to 2 digits.
   ii. X will be the total number of cookie types bought.
   iii. Y will be the total number of cookies in total, not per package.
   iv. Z is a formatted text string that contains the cost of per cookie rounded
   to 2 digits. */

   decimal grand = getTotalPrice - totalCookie;
   //show cost $.
   string grandTotal = grand.ToString($"{0:c}");
   //show the parsed $
   string showParsePriceCookie = parsePriceCookie.ToString($"{0:c}");
   //print it out.
   Console.WriteLine("You will make {3}, if you sell all {0} cookie types, assuming each package of cookies contains {1} for {2} per cookie.", splitNames.Length, numberIndividualCookie, showParsePriceCookie, grandTotal);
  }

  private static decimal[] PromptCookieCosts(string[] cookieTypes) {

    /*a. This function should accept the string array of cookie types.
  b. Inside of this function create an array to hold the cost of each cookie type.
  i. Note the length of this Array must be depended on how many cookie
  types the user typed in. AKA do NOT hard-code this.
  c. Loop through the cookie array and prompt the user for the cost of each cookie
  type in the array.
  i. Make sure to validate this user prompt.
  d. After you get each cost, Return this array to the Main. */

  string[] answer = new string[cookieTypes.Length];
  decimal[] storeCost  = new decimal[cookieTypes.Length];

  for (int i = 0; i < cookieTypes.Length; i++) {
    //this now gets the each cookie type now I need to get this to just send the cost in total.
    //this is validation.
    Console.WriteLine("Please enter the cost of the {0} cookie package:", cookieTypes[i]);
    answer[i] = Console.ReadLine();
    while (string.IsNullOrWhiteSpace(answer[i]) || !decimal.TryParse(answer[i], out storeCost[i])) {
     {

      Console.WriteLine("Please only enter positive decimal numbers.");
      answer[i] = Console.ReadLine();
     }
    }
    //After you get each cost,Return this array to the Main.
    // Console.WriteLine(" {0}", answer[i]);
   }
   return storeCost;
  }

  // This	function	should	accept	the	decimal	array	of	the	cookie costs	as	a	parameter.   
  private static decimal TotalCookieCost(decimal[] inputCookieCost) {

   //Inside	of	the	function,	create	a	variable	to	HOLD	the	total	sum	of	all	of	the	cookies	
   //bought.
   //i. Remember to set the initial value of this variable.

   decimal storeTotal = 0;
   //decimal convertInputCost;
   //c. Create a loop and cycle through the array of costs and add them all up.
   for (int f = 0; f < inputCookieCost.Length; f++) {

    storeTotal += inputCookieCost[f];
   }
   // this stores the total in function.
   // d. Return this total for all of the cookies
   return storeTotal;

   //back to Main.
   /* a. This function should accept the decimal array of the cookie costs as a parameter.
   b. Inside of the function, create a variable to hold the total sum of all of the cookies
   bought.
   i. Remember to set the initial value of this variable.
   c. Create a loop and cycle through the array of costs and add them all up.
   i. This should not be hard-coded and should work for an array of any size.
   d. Return this total for all of the cookies
   e. back to the Main.
    */

  }

  private static decimal AmountSoldFor(decimal menuNumberBought, decimal numberOfCookiesPackage, decimal costOfIndividualCookie) {

    /*a. This function should accept 3 parameters.
  i. Total number of cookie types bought
  ii. # of cookies in each package
  iii. Cost of 1 individual cookie
  b. Inside of this function you should calculate the total dollar amount that the user
  will get if they sell every single cookie individually.
  c. Return this total dollar amount back to the Main method.
  I need to multiply the cookies that in each package by the price of each individual cookie.
  */
   
   decimal totalPrice = numberOfCookiesPackage * costOfIndividualCookie;
   // now i need to multiply the menuNumber/cookieTypes number to total price of every cookie.
   decimal totalPriceOfCookies = totalPrice * menuNumberBought;
   return totalPriceOfCookies;
  }
 }
}

/*
  Test, Test, Test:
  Tested on a calculator:
  //16 : in sumCost I got this number correctly.
  //10 cookies * 1.00 is the price = total price of every cookie : 15
  //3*10=30 : getting the menuNumber/groups multiply by totalPrice. This gives the overall cost of what was purchased and recieved.
  //30-16 = 14 :Checked.
  Welcome to the Cookie Counter program!
  We are going to calculate the profit that you will make when selling individual cookies out of a pack of cookies.
  Please enter a number for how many cookie types you would like.
  3
  Please enter a comma separated list of types/flavors of each cookie package you are going to buy:
  Chocolate,  Sugar, Snicker Doodle
  Please enter the cost of the Chocolate cookie package:
  7
  Please enter the cost of the Sugar cookie package:
  2.5
  Please enter the cost of the Snicker Doodle cookie package:
  6.5
  Please enter the number of individual cookies that are in each package: (As a whole number.)
  10
  What is the selling price for 1 individual cookie?
  1.00
  You will make $14.00, if you sell all 3 cookie types, assuming each package of cookies contains 10 for $1.00 per cookie.
  Test 01:
  Welcome to the Cookie Counter program!
  We are going to calculate the profit that you will make when selling individual cookies out of a pack of cookies.
  Please enter a number for how many cookie types you would like.
  3
  Please enter a comma separated list of types/flavors of each cookie package you are going to buy:
  Chocolate,  Sugar, Snicker Doodle
  Please enter the cost of the Chocolate cookie package:
  7.
  Please enter the cost of the Sugar cookie package:

  Please only enter positive decimal numbers.
  2.5
  Please enter the cost of the Snicker Doodle cookie package:
  6.5
  Please enter the number of individual cookies that are in each package: (As a whole number.)

  Please only enter positive whole numbers.
  10
  What is the selling price for 1 individual cookie?
  1.00
  You will make $14.00, if you sell all 3 cookie types, assuming each package of cookies contains 10 for $1.00 per cookie.
  Test 02:
  I calculated on a calculator to make sure the cost is correct.
  //21.17 : in sumCost I got this number correctly.
  //12 cookies * 1.25 is the price = total price of every cookie : 15
  //4*15=60 : getting the menuNumber/groups multiply by totalPrice. This gives the overall cost of what was purchased and recieved.
  //60-21.17
   //You will make $38.83, if you sell all 4 cookie types, assuming each package of cookies contains 12 for $1.25 per cookie.

  Welcome to the Cookie Counter program!
  We are going to calculate the profit that you will make when selling individual cookies out of a pack of cookies.
  Please enter a number for how many cookie types you would like.
  4
  Please enter a comma separated list of types/flavors of each cookie package you are going to buy:
  Butter, Frosted, Sprinkles, Chocolate Chip
  Please enter the cost of the Butter cookie package:
  4
  Please enter the cost of the Frosted cookie package:
  5.4
  Please enter the cost of the Sprinkles cookie package:
  4.78
  Please enter the cost of the Chocolate Chip cookie package:
  6.99
  Please enter the number of individual cookies that are in each package: (As a whole number.)
  12
  What is the selling price for 1 individual cookie?
  1.25
  You will make $38.83, if you sell all 4 cookie types, assuming each package of cookies contains 12 for $1.25 per cookie.   
  //--My Own Test--// 
  Calculated in calculator: 
  21 is the sum of all 5 cookies
  10*1=10
  5*10=50
  50-21=29 
  Test 03:
  Welcome to the Cookie Counter program!
  We are going to calculate the profit that you will make when selling individual cookies out of
  a pack of cookies.
  Please enter a number for how many cookie types you would like.
  5
  Please enter a comma separated list of types/flavors of each cookie package you are going to buy:
  Butter, Frosted, Sprinkles, Vanilla, Green Tea
  Please enter the cost of the Butter cookie package:
  7
  Please enter the cost of the Frosted cookie package:
  2.5
  Please enter the cost of the Sprinkles cookie package:
  6.5
  Please enter the cost of the Vanilla cookie package:
  2
  Please enter the cost of the Green Tea cookie package:
  3
  Please enter the number of individual cookies that are in each package: (As a whole number.)
  10
  What is the selling price for 1 individual cookie?
  1
  You will make $29.00, if you sell all 5 cookie types, assuming each package of cookie contains 10 for $1.00 per cookie.
      */