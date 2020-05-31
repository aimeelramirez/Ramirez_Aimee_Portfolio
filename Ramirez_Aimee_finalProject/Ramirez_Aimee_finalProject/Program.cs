using System;
using System.Collections.Generic;
using System.IO;
using MySql.Data.MySqlClient;
using System.Data;

namespace Ramirez_Aimee_finalProject
{
    class Program
    {
        MySqlConnection _conn = null;

        static void Main(string[] args)
        {
            bool running = true;
            int itemSelection = 0;
            int itemIndex = 0;
            int newJ = 0;
            Player currentPlayer = null;
            List<Plant> plants = null;
            Dictionary<string, Player> getPlayers = null;
            string[] getName = null;
            string playerSelected = "";
            string name = "";
            int newI = 0;

            int water = 0;
            int sow = 0;
            Program instance = new Program();

            DataTable data = null;
            DataRowCollection rows = null;
            while (running == true)
            {
                Console.WriteLine("Welcome to the Garden Application!");
                PrintMenu();
                string userSelection = Console.ReadLine();

                int parseSelection = validateInt(userSelection);
                switch (parseSelection)
                {
                    case 1:
                        {

                            if (currentPlayer == null)
                            {
                                Console.WriteLine("You need to make a player first!");
                                currentPlayer = DisplayCreatePlayer(name);

                                getPlayers = new Dictionary<string, Player>();


                                getPlayers.Add(currentPlayer.GetName(), currentPlayer);


                                break;


                            }


                            else if (getPlayers != null && currentPlayer != null)
                            {
                                Console.Clear();

                                //i want to get the keys to be stored to match the pairs to get the name
                                getName = new string[getPlayers.Count];

                                int i = 0;
                                Console.WriteLine("-------------Players-------------");

                                foreach (KeyValuePair<string, Player> pair in getPlayers)
                                {
                                    //name
                                    getName[i] += pair.Key;

                                    Console.WriteLine($"Name: {getName[i]}");
                                    i++;

                                }

                                //for (int index = 0; index < getPlayers.Count; index++)
                                //{
                                //    var item = getPlayers.ElementAt(index);
                                //    var itemKey = item.Key;
                                //    var itemValue = item.Value;
                                //    Console.WriteLine($"item: {item} index: {index}\n key:{itemKey}\n name: {itemValue.GetName()} address: {itemValue.GetAddress()}");


                                //}
                                Console.WriteLine("Enter a new username to create a player or type the name of the player you would like to select:");
                                string inputPlayer = Console.ReadLine();
                                playerSelected = validateString(inputPlayer);

                                for (int g = 0; g < getName.Length; g++)
                                {

                                    if (playerSelected == getName[g])
                                    {


                                        Console.WriteLine("------Selecting a Current Player-------");
                                        currentPlayer = new Player(playerSelected);
                                        Console.WriteLine($"The selected player is {currentPlayer.GetName()}.");


                                    }
                                    else if (!getPlayers.ContainsKey(playerSelected))
                                    {
                                        //counterplayer += 1;

                                        currentPlayer = DisplayCreatePlayer(playerSelected);
                                        //player[g] = new player(currentPlayer.GetName(), currentPlayer.GetAddress());

                                        getPlayers.Add(currentPlayer.GetName(), currentPlayer);

                                        Console.WriteLine("------Adding and Selecting the New Player-------");

                                        Console.WriteLine($"The selected player is {currentPlayer.GetName()}.");



                                    }


                                }

                            }
                        }
                        break;
                    case 2:
                        {
                            Console.WriteLine("-------View Shopping Cart-------");
                            if (currentPlayer != null)
                            {
                                if (getPlayers[currentPlayer.GetName()].GetShoppingCart.Count > 0)
                                {
                                    int counter = 0;
                                    Console.WriteLine("View Shopping Cart");


                                    for (int j = 0; j < getPlayers[currentPlayer.GetName()].GetShoppingCart.Count; j++)
                                    {
                                        if (counter == 0)
                                        {
                                            Console.WriteLine("----------------------------------------");
                                            Console.WriteLine($" Id: {getPlayers[currentPlayer.GetName()].GetShoppingCart[j].GetId()}");
                                            Console.WriteLine($" Name: {getPlayers[currentPlayer.GetName()].GetShoppingCart[j].GetName()}");
                                            Console.WriteLine("----------------------------------------\n");
                                        }


                                    }
                                    Console.WriteLine("You have: " + getPlayers[currentPlayer.GetName()].GetShoppingCart.Count + " items in your cart.");

                                }
                                else
                                {
                                    Console.WriteLine("Please add an item into cart.");
                                }
                            }
                            else
                            {
                                Console.WriteLine("Please select a player first!");

                            }
                        }


                        break;
                    case 3:
                        {
                            if (currentPlayer != null)
                            {
                                Console.WriteLine("-------Remove Item From Cart-------");

                                if (getPlayers[currentPlayer.GetName()].GetShoppingCart.Count > 0)
                                {
                                    Console.WriteLine("Please select index of item you like to delete:");
                                    for (int j = 0; j < getPlayers[currentPlayer.GetName()].GetShoppingCart.Count; j++)
                                    {
                                        newJ = j + 1;
                                        Console.Write($"[{newJ}] ");

                                        Console.WriteLine($"Id: {getPlayers[currentPlayer.GetName()].GetShoppingCart[j].GetId()}");
                                        Console.WriteLine($"Name: {getPlayers[currentPlayer.GetName()].GetShoppingCart[j].GetName()}");
                                    }
                                    for (int j = 0; j < getPlayers[currentPlayer.GetName()].GetShoppingCart.Count;)
                                    {
                                        string inputDelete = Console.ReadLine();
                                        int deleteSelection = validateInt(inputDelete);
                                        int deleteIndex = deleteSelection - 1;
                                        //int findJ = j + 1;
                                        if (deleteSelection > 0 && deleteSelection <= getPlayers[currentPlayer.GetName()].GetShoppingCart.Count)
                                        {
                                            if (getPlayers[currentPlayer.GetName()].GetShoppingCart.Contains(getPlayers[currentPlayer.GetName()].GetShoppingCart[deleteIndex]))
                                            {
                                                plants.Add(getPlayers[currentPlayer.GetName()].GetShoppingCart[deleteIndex]);
                                                Console.WriteLine("You are removing: " + getPlayers[currentPlayer.GetName()].GetShoppingCart[deleteIndex].GetId());

                                                getPlayers[currentPlayer.GetName()].GetShoppingCart.RemoveAt(deleteIndex);
                                            }
                                            else
                                            {
                                                Console.WriteLine("Sorry this isn't the right index...");
                                            }
                                        }
                                        else
                                        {
                                            Console.WriteLine("Sorry this isn't the right index...");

                                        }
                                        break;
                                    }
                                }
                                else
                                {
                                    Console.WriteLine("Please add something in cart before removal. Thank you!");
                                }
                            }
                            else
                            {
                                Console.WriteLine("Please select a customer first!");

                            }

                        }
                        break;

                    case 4:
                        {
                            if (currentPlayer != null)
                            {
                                if (plants == null)
                                {
                                    Console.WriteLine(" Load Plant Data");
                                    plants = new List<Plant>();

                                    instance._conn = new MySqlConnection();
                                    instance.Connect();
                                    Console.WriteLine(instance._conn);
                                    Console.WriteLine("------------------------Inventory-Items------------------------:");
                                    data = instance.QueryDB("SELECT `id`, `name` FROM plants");

                                    rows = data.Rows;
                                    int counter = 0;

                                    for (int i = 0; i < rows.Count; i++)
                                    {
                                        DataRow row = rows[i];
                                        int id = Convert.ToInt32(row["id"].ToString());
                                        name = row["name"].ToString();
                                        counter += 1;
                                        Console.Write($"item: #");
                                        Console.WriteLine($"{counter}");
                                        Console.WriteLine($"Id: {id}");
                                        Console.WriteLine($"Name: {name}");
                                        Console.WriteLine($"-------------------------------------------------------------------------------------------------\n");

                                        Plant plant = new Plant(id, name);
                                        plants.Add(plant);
                                    }
                                    //closing connection after storing
                                    instance.CloseConnect();
                                }
                                else
                                {
                                    for (int i = 0; i < plants.Count; i++)
                                    {
                                        newI = i + 1;
                                        Console.Write($"{newI} ");
                                        Console.WriteLine($"id: {plants[i].GetId()}");
                                        Console.WriteLine($"name: {plants[i].GetName()}");
                                        Console.WriteLine($"------------------------------------------------------------\n");

                                    }
                                }
                            }
                            else
                            {
                                Console.WriteLine("Please select a player first!");

                            }

                        }


                        break;
                    case 5:
                        {

                            Console.WriteLine("-------Add Item to Cart-------");
                            if (currentPlayer != null)
                            {
                                if (plants != null)
                                {

                                    Console.WriteLine("Add to Item to Cart");
                                    for (int i = 0; i < plants.Count; i++)
                                    {
                                        newI = i + 1;
                                        Console.Write($"[{newI}] ");
                                        Console.WriteLine($"Id: {plants[i].GetId()}");
                                        Console.WriteLine($"Name: {plants[i].GetName()}");

                                    }
                                    Console.WriteLine("Please select the number corrosponding to the item:");
                                    string inputData = Console.ReadLine();

                                    itemSelection = validateInt(inputData);
                                    itemIndex = itemSelection - 1;

                                    if (itemIndex >= plants.Count || itemIndex < 0)
                                    {
                                        Console.WriteLine("Sorry this isn't the right index...");
                                    }
                                    else
                                    {
                                        Console.WriteLine($"You selected id: {plants[itemIndex].GetId()}");
                                        Console.WriteLine($"You selected name: {plants[itemIndex].GetName()}");

                                        Console.WriteLine("Adding new item into shopping cart!");


                                        getPlayers[currentPlayer.GetName()].GetShoppingCart.Add(plants[itemIndex]);

                                        // shoppingCart.Add(plants[itemIndex]);
                                        plants.RemoveAt(itemIndex);

                                    }

                                }
                                else
                                {
                                    Console.WriteLine("Please view inventory before adding items in cart.");

                                }
                            }

                            else
                            {
                                Console.WriteLine("Please select a player first!");

                            }

                        }

                        break;

                    case 6:
                        {
                            if (currentPlayer != null)
                            {
                                if (plants != null)
                                {
                                    if (getPlayers[currentPlayer.GetName()].GetShoppingCart.Count > 0)
                                    {
                                        int count = 0;
                                        for (int j = 0; j < getPlayers[currentPlayer.GetName()].GetShoppingCart.Count; j++)
                                        {
                                            count += 1;
                                            Console.WriteLine($"--------------- {count} ------------------------");
                                            Console.WriteLine($" Id: {getPlayers[currentPlayer.GetName()].GetShoppingCart[j].GetId()}");
                                            Console.WriteLine($" Name: {getPlayers[currentPlayer.GetName()].GetShoppingCart[j].GetName()}");
                                            Console.WriteLine("----------------------------------------\n");



                                        }
                                        Console.WriteLine("You are growing  " + getPlayers[currentPlayer.GetName()].GetShoppingCart.Count + " amount of plants for your garden.");
                                        sow += 1;
                                        water += 1;
                                        if (sow <= 3 && water <= 3)
                                        {

                                            GetInterface(water, sow, currentPlayer);
                                        }
                                        else
                                        {
                                            sow = 0;
                                            water = 0;
                                        }

                                    }
                                    else
                                    {
                                        Console.WriteLine("Please add items to your cart.");

                                    }
                                }
                                else
                                {
                                    Console.WriteLine("Please view inventory before adding items in cart.");

                                }
                            }

                            else
                            {
                                Console.WriteLine("Please select a player first!");

                            }

                        }
                        break;
                    case 7:
                        {
                            running = false;

                        }
                        break;


                }

            }
        }
        private static void PrintMenu()
        {
            Console.WriteLine();

            Console.WriteLine();
            Console.WriteLine("Select an option.");
            Console.WriteLine("1. Create User/Player");
            Console.WriteLine("2. Display Cart of Seeds");
            Console.WriteLine("3. Delete Plant/Seeds from Cart");
            Console.WriteLine("4. Load Plant Data");
            Console.WriteLine("5. Select Seeds/Plants to Cart");
            Console.WriteLine("6. Let's Garden!");
            Console.WriteLine("7. Exit");

        }
        public static void GetInterface(int water, int sow, Player currentPlayer)
        {

            Console.WriteLine("Let's Garden!");

            Dictionary<int, int> index = new Dictionary<int, int>();

            index.Add(currentPlayer.Water(water), currentPlayer.Tend(water, sow));
            Interface.Harvest(index);
            //foreach(KeyValuePair<string, string> key in index)
            //{
            //    Console.WriteLine($"{key.Key} + {key.Value}");
            //}
            currentPlayer.HarvestIndex(index);


        }
        public static Player DisplayCreatePlayer(string name)
        {
            Player player = null;

            if (name == "")
            {
                Console.Clear();
                Console.WriteLine("-----Create-a-Player----");

                Console.WriteLine("Enter player's name:");
                string inputName = Console.ReadLine();
                name = validateString(inputName);


                player = new Player(name);
                Console.WriteLine("----------------------------");
                Console.WriteLine("Welcome " + player.GetName() + "!");
                Console.WriteLine("----------------------------");
                Console.WriteLine("Press any key to continue.");
                Console.ReadKey();

            }

            return player;
        }
        //open connection if so.
        void Connect()
        {
            BuildConnString();
            try
            {

                _conn.Open();
                Console.WriteLine("Connection Success.");

            }
            catch (MySqlException e)
            {
                string msg = "";
                switch (e.Number)
                {
                    case 0:
                        {
                            msg = e.ToString();
                            break;
                        }
                    case 1042:
                        {
                            msg = "Can't resolve host address.\n" + _conn.ConnectionString;

                            break;
                        }
                    default:
                        {
                            msg = e.ToString();
                            break;
                        }
                }
                Console.WriteLine(msg);
                throw;

            }

        }
        //check if connection is closed.
        void CloseConnect()
        {

            if (_conn == null)
            {
                Console.WriteLine("Connection is not connected yet.");

            }
            else
            {
                _conn.Close();
                Console.WriteLine("Connection Closed.");

            }



        }
        void BuildConnString()
        {
            string ip = "";
            using (StreamReader sr = new StreamReader("../../../connect.txt"))
            // using (StreamReader sr = new StreamReader("c:/VFW/connection.txt"))

            {
                ip = sr.ReadLine();

            }

            string connString = $"Server={ip};";

            connString += "uid=dbAdmin;";
            connString += "pwd=dbPassword;";
            connString += "database=exampleDatabase;";
            connString += "port=8889";


            _conn.ConnectionString = connString;



        }

        DataTable QueryDB(string query)
        {
            MySqlDataAdapter adapter = new MySqlDataAdapter(query, _conn);
            DataTable data = new DataTable();

            adapter.SelectCommand.CommandType = CommandType.Text;

            adapter.Fill(data);


            return data;

        }
        public static int validateInt(string input)
        {
            int placer = 0;
            while (!int.TryParse(input, out placer))
            {
                Console.WriteLine("Try Again.");
                input = Console.ReadLine();
            }
            return placer;
        }
        public static string validateString(string input)
        {
            while (string.IsNullOrWhiteSpace(input))
            {
                Console.WriteLine("Try Again");
                input = Console.ReadLine();
            }
            return input;
        }
    }
}
