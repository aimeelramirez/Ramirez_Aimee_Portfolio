using System;
// using IO;
namespace Ramirez_Aimee_LogicLoops
{
    class Program
    {
        static void Main(string[] args)
        {
            /*Ramirez_Aimee_Logic_Loops
            SDI Section 01 */
            //---Problem #1 Piggy Bank---//

            decimal numberInput;
            Console.WriteLine("Wait how much do you have already in the bank? : ");
            decimal bankAlreadyInIt;
            string handleBank = Console.ReadLine();
            Console.WriteLine("Please let me know how much you want to save in your bank: ");
            string handle = Console.ReadLine();

            while (!decimal.TryParse(handleBank, out numberInput))
            {
                Console.WriteLine("this is not the right for what you had in your bank, try again.");
                handleBank = Console.ReadLine();

            }
            string cushion = numberInput.ToString($"{0:c}");
            Console.WriteLine("thank you, you put for how much in your bank: {0} ", cushion);

            while (!decimal.TryParse(handle, out bankAlreadyInIt))
            {
                Console.WriteLine("this is not the right for what you wanted to save, try again:");
                handle = Console.ReadLine();

            }
            string savings = bankAlreadyInIt.ToString($"{0:c}");
            Console.WriteLine("thank you, you put how much you want to save: {0}", savings);

           
                // this is adding both of that together to total inital savings
                decimal addIt = numberInput + bankAlreadyInIt;
                //running the loop now.
               
                decimal year = 12;
                for (int run = 0; run <= year; run++)

                { 
                if (run > 0) {
                      numberInput += bankAlreadyInIt;

                        if (run > 0)
                        { 
                        string newTotal = numberInput.ToString($"{0:c}");
                            //“This    month   you now have    SX in   your    piggy   bank!”
                            Console.WriteLine("This is month you now have " + newTotal + " in your piggy bank!");
                        }
                   }
                }
            
            /* Test #1:
            thank you, you put for how much in your bank: $10.00
            thank you, you put how much you want to save: $5.50
            This is month you now have $15.50 in your piggy bank!
            This is month you now have $21.00 in your piggy bank!
            This is month you now have $26.50 in your piggy bank!
            This is month you now have $32.00 in your piggy bank!
            This is month you now have $37.50 in your piggy bank!
            This is month you now have $43.00 in your piggy bank!
            This is month you now have $48.50 in your piggy bank!
            This is month you now have $54.00 in your piggy bank!
            This is month you now have $59.50 in your piggy bank!
            This is month you now have $65.00 in your piggy bank!
            This is month you now have $70.50 in your piggy bank!
            This is month you now have $76.00 in your piggy bank!
            Test #2:
            Wait how much do you have already in the bank? :
            15.5
            Please let me know how much you want to save in your bank:
            2.5
            thank you, you put for how much in your bank: $15.50
            thank you, you put how much you want to save: $2.50
            This is month you now have $18.00 in your piggy bank!
            This is month you now have $20.50 in your piggy bank!
            This is month you now have $23.00 in your piggy bank!
            This is month you now have $25.50 in your piggy bank!
            This is month you now have $28.00 in your piggy bank!
            This is month you now have $30.50 in your piggy bank!
            This is month you now have $33.00 in your piggy bank!
            This is month you now have $35.50 in your piggy bank!
            This is month you now have $38.00 in your piggy bank!
            This is month you now have $40.50 in your piggy bank!
            This is month you now have $43.00 in your piggy bank!
            This is month you now have $45.50 in your piggy bank!
            
             */
            //---Problem #2 3,2,1 Blast Off!---//
            // next i need to put the for loop of count down to zero not while loop 
            double countDown;
            string input2;
            double replace;
            Console.WriteLine("Please put the starting number for countdown: ");
            input2 = Console.ReadLine();
            bool inputValidation = double.TryParse(input2, out replace);
            while (!inputValidation)
            {
                //reprompting at least once.
                Console.WriteLine("this is not the right input... Please, Try again:");
                input2 = Console.ReadLine();
                inputValidation = double.TryParse(input2, out replace);
            }
            Console.WriteLine("Your countdown number to start with is: " + replace + "!");

            if (replace > 0)
            {
                for (countDown = replace; countDown >= 0; countDown--)
                {
                    Console.WriteLine(countDown);
                }
                Console.WriteLine("Blast Off!");
            }

            /* Test #1:
            Please put the starting number for countdown:
            5
            Your countdown number to start with is: 5!
            5
            4
            3
            2
            1
            0
            Blast Off!
            Test #2:
            Please put the starting number for countdown:
            Seven
            this is not the right input... Please, Try again:
            7
            Your countdown number to start with is: 7!
            7
            6
            5
            4
            3
            2
            1
            0
            Blast Off!
             */
            //---Problem #3 Darn Good Donuts---//
            // got to prompt the user a value for donuts in the box
            string boxOfDonuts, pickDonuts;
            double donutsPicked;
            double donutsAmount;
            Console.WriteLine("Please type the number of donuts in the box:");
            boxOfDonuts = Console.ReadLine();

            while (!double.TryParse(boxOfDonuts, out donutsAmount) && donutsAmount >= 0)
            {
                Console.WriteLine("You didnt enter a number try again for box donuts.");
                boxOfDonuts = Console.ReadLine();
            }
            double remainder = 0;
     
            while (donutsAmount > 0)
            {
              
                    Console.WriteLine("How many donuts would you like to eat?  \n  0->3 are valid choices");
                    pickDonuts = Console.ReadLine();

                    while (!double.TryParse(pickDonuts, out donutsPicked) && donutsPicked >= 0)
                    {
                        Console.WriteLine("You didnt enter a number try again for donuts that are picked.");
                        pickDonuts = Console.ReadLine();

                    }
                    //giving testing variables
                    int testValueDonutsPickedLimit = 3;
                    int testValueDonutsNegOne = -1;
                    int testValueDonutsNegTwo = -2;


                    if (donutsPicked <= testValueDonutsPickedLimit)
                    {
                        donutsAmount -= donutsPicked;

                        if (donutsAmount == testValueDonutsNegOne || donutsAmount == testValueDonutsNegTwo)
                        {
                            if (donutsAmount == testValueDonutsNegOne)
                            {
                                Console.WriteLine("Sorry I ran out of donuts, I will have to owe you {0} donuts tomorrow.", donutsAmount + 2);
                            }
                            else if (donutsAmount == testValueDonutsNegTwo)
                            {
                                Console.WriteLine("Sorry I ran out of donuts, I will have to owe you {0} donuts tomorrow.", donutsAmount + 4);
                            }
                        }
                      
                            Console.WriteLine("There are " + donutsAmount + " donut(s) left in the box.");

                    
                        if (remainder == donutsAmount)
                        {
                            Console.WriteLine("Donuts are all gone, hope everyone enjoys them!");
                        }
                        /* Test #1:
                        Please type the number of donuts in the box:
                        12
                        This is test for 12 and up on donut count.
                        How many donuts would you like to eat?
                        0->3 are valid choices
                        2
                        There are 10 donut(s) left in the box.
                        How many donuts would you like to eat?
                        0->3 are valid choices
                        0
                        There are 10 donut(s) left in the box.
                        How many donuts would you like to eat?
                        0->3 are valid choices
                        3
                        There are 7 donut(s) left in the box.
                        How many donuts would you like to eat?
                        0->3 are valid choices
                        5
                        How many donuts would you like to eat?
                        0->3 are valid choices
                        3
                        There are 4 donut(s) left in the box.
                        How many donuts would you like to eat?
                        0->3 are valid choices
                        2
                        There are 2 donut(s) left in the box.
                        How many donuts would you like to eat?
                        0->3 are valid choices
                        2
                        Donuts are all gone, hope everyone enjoys them!
                         

                        Test #2:
                        Please type the number of donuts in the box:
                        4
                        This is test for 4 and down on donut count.
                        How many donuts would you like to eat?
                        0->3 are valid choices
                        3
                        There are 1 donut(s) left in the box.
                        How many donuts would you like to eat?
                        0->3 are valid choices
                        0
                        There are 1 donut(s) left in the box.
                        How many donuts would you like to eat?
                        0->3 are valid choices
                        2
                        Sorry I ran out of donuts, I will have to owe you 1 donuts tomorrow.

                        Test #3:

                        Please type the number of donuts in the box:
                        8
                        This is test for between 4 - 12 on donut count.
                        How many donuts would you like to eat?
                        0->3 are valid choices
                        2
                        There are 6 donut(s) left in the box.
                        How many donuts would you like to eat?
                        0->3 are valid choices

                        You didnt enter a number try again for donuts that are picked.
                        0
                        There are 6 donut(s) left in the box.
                        How many donuts would you like to eat?
                        0->3 are valid choices
                        3
                        There are 3 donut(s) left in the box.
                        How many donuts would you like to eat?
                        0->3 are valid choices
                        1
                        There are 2 donut(s) left in the box.
                        How many donuts would you like to eat?
                        0->3 are valid choices
                        23
                        How many donuts would you like to eat?
                        0->3 are valid choices
                        3
                        Sorry I ran out of donuts, I will have to owe you 1 donuts tomorrow.                   
                         */
                    
                }
            }
        }
    }
}



