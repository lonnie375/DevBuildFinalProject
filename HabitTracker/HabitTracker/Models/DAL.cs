using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;

namespace HabitTracker
{
    public class DAL
    {
        public static string CS; // connection string

        // USER CRUD Operations 

            // GetAll Users

        public static List<User> GetAllUsers()
            {
                MySqlConnection db = new MySqlConnection(CS);
                db.Open();
                var result = db.GetAll<User>().ToList();
                db.Close();
                return result ;
            }

            // GetOne User

        public static User GetOneUser(int id)
        {
            MySqlConnection db = new MySqlConnection(CS);
            db.Open();
            var result = db.Get<User>(id);
            db.Close();
            return result;
        }

        // CATEGORY CRUD Operations 

        // GetAll Category
        public static List<Category> GetAllCategories()
        {
            MySqlConnection db = new MySqlConnection(CS);
            db.Open();
            var result = db.GetAll<Category>().ToList();
            db.Close();
            return result;
        }


        // GetOne Category
        public static Category GetOneCategory(int id)
        {
            MySqlConnection db = new MySqlConnection(CS);
            db.Open();
            var result = db.Get<Category>(id);
            db.Close();
            return result;
        }



        // Habit CRUD  

        //GetAll Habit
        public static List<Habit> GetAllHabits()
        {
            MySqlConnection db = new MySqlConnection(CS);
            db.Open();
            var result = db.GetAll<Habit>().ToList();
            db.Close();
            return result;
        }

        //GetOne Habit
        public static Habit GetOneHabit(int id)
        {
            MySqlConnection db = new MySqlConnection(CS);
            db.Open();
            var result = db.Get<Habit>(id);
            db.Close();
            return result;
        }

        //Delete Habit
        public static void DeleteHabit(int id)
        {
            MySqlConnection db = new MySqlConnection(CS);
            db.Open();
            Habit habt = new Habit();
            habt.id = id; 
            db.Delete(habt);
            db.Close();

        }

        //Edit Habit
        public static void UpdateHabit(Habit habt)
        {
            MySqlConnection db = new MySqlConnection(CS);
            db.Open();
            db.Update(habt);
            db.Close();
        }

        //Create Habit

        public static Habit AddHabit(Habit habt)
        {
            MySqlConnection db = new MySqlConnection(CS);
            db.Open();
            db.Insert(habt);
            db.Close();
            return habt;

        }




        // Tracking CRUD

        //GetAll Tracking
        public static List<Tracker> GetAllTrackers()
        {
            MySqlConnection db = new MySqlConnection(CS);
            db.Open();
            var result = db.GetAll<Tracker>().ToList();
            db.Close();
            return result;
        }

        //Create Tracking
        public static Tracker AddTracker(Tracker track)
        {
            MySqlConnection db = new MySqlConnection(CS);
            db.Open();
            db.Insert(track);
            db.Close();
            return track;

        }

        //Delete Tracking
        public static void DeleteTracker(int id)
        {
            MySqlConnection db = new MySqlConnection(CS);
            db.Open();
            Tracker track = new Tracker();
            track.id = id;
            db.Delete(track);
            db.Close();

        }


    }
}
