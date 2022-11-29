using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace HabitTracker
{
    [Table("tracker")]
    public class Tracker
    {
        [Key]
        public int id { get; set; }
        public int habit_id { get; set; }
        public DateTime date { get; set; }

    }
}
