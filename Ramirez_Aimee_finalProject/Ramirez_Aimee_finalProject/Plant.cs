using System;
namespace Ramirez_Aimee_finalProject
{
    public class Plant
    {
        protected int _id;
        protected string _name;
        public Plant(int id, string name)
        {
            _id = id;
            _name = name;
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
        //set private id
        public void SetId(int id)
        {
            this._id = id;
        }
        //get private id
        public int GetId()
        {
            return this._id;
        }

    }
}
