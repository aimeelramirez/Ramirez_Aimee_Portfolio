using System;
using System.Collections.Generic;
namespace Ramirez_Aimee_finalProject
{
    public class Player
    {
        protected string _name;
        protected List<Plant> _shoppingCart = new List<Plant>();
        public Dictionary<string, string> _harvest;

        public Player(string name)
        {
            _name = name;

        }
        public List<Plant> GetShoppingCart
        {
            get
            {
                return _shoppingCart;
            }
            set
            {
                _shoppingCart = value;
            }
        }

        //set private name
        public void SetName(string name)
        {
            this._name = name;
        }
        //get private name
        public string GetName()
        {
            return this._name;
        }
        public int Water(int water)
        {
            return water;
        }
        public int Tend(int water, int sow)
        {
            if (water < 3)
            {
                Console.WriteLine("Please water your plant(s).");
            }
            else if (sow < 3)
            {
                Console.WriteLine("Keep tending your plant(s).");

            }
            else if (sow == 3 && water == 3)
            {
                Console.WriteLine("Time to harvest!");
              

            }
            return sow;
        }

        public void HarvestIndex(Dictionary<int, int> _harvest)
        {
            //_behaviors = new Dictionary<string, string>();
            if (_harvest.Count >= 0)
            {
                Console.WriteLine("\nDictionary Keys of harvest location");
                foreach (KeyValuePair<int, int> key in _harvest)
                {
                    if (key.Key == 3 && key.Value == 3)
                    {

                     
                        Console.WriteLine($" Congrats! You made: ${ string.Format("{0:0.00}", new Random().NextDouble() * 1000)} with your harvest");


                    }
                    if (key.Key < 3 && key.Value == 3)
                    {

                        Console.WriteLine("Time to tend your garden!");


                    }
                    if (key.Key == 3 && key.Value < 3)
                    {

                        Console.WriteLine("Time to water your garden!");


                    }
                 
                    Console.WriteLine($"{key.Key} tend : {key.Value} water");
                    Console.WriteLine("---------------------------------------------------------------------");

                }

            }
            else
            {
                Console.WriteLine("No values to be read");
            }

        }

    }
}
