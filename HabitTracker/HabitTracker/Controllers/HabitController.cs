using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HabitTracker.Controllers
{
    [Route("habit")]
    [ApiController]
    public class HabitController : ControllerBase
    {
        [HttpGet]
        public List<Habit> GetAll()
        {
            return DAL.GetAllHabits();
        }

        [HttpGet("{id}")]
        public Habit Get(int id)
        {
            return DAL.GetOneHabit(id);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            DAL.DeleteHabit(id);
        }

        [HttpPut]
        public void Update(Habit habt)
        {
            DAL.UpdateHabit(habt);
        }

        [HttpPost]
        public Habit Add(Habit habt)
        {
            return DAL.AddHabit(habt);
        }


        [HttpGet("all/{user_id}")]
        public List<Habit> GetAllUserHabits(int user_id)
        {
            return DAL.GetUserHabits(user_id);
        }


    }
}
