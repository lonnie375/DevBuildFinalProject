using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HabitTracker.Controllers
{
    [Route("user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public List<User> GetAll()
        {
            return DAL.GetAllUsers();
        }

        [HttpGet("{id}")]
        public User Get(int id)
        {
            return DAL.GetOneUser(id);
        }
    }
}
