using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace HabitTracker
{
    [Table("category")]
    public class Category
    {
        [Key]
        public int id { get; set; }
        public string type { get; set; }
    }
}
