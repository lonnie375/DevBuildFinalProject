using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace HabitTracker
{
    [Table("habit")]
    public class Habit
    {
        [Key]
        public int id { get; set; }
        public int users_id { get; set; }
        public string title { get; set; }
        public int category_id { get; set; }
        public string amount { get; set; } 
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
        public string description { get; set; }


    }
}
