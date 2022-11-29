using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace HabitTracker
{
    [Table("user")]
    public class User
    {
        [Key]
        public int id { get; set; }
        public string username { get; set; }

    }
}
