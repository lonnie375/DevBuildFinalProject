using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HabitTracker.Controllers
{
    [Route("tracker")]
    [ApiController]
    public class TrackerController : ControllerBase
    {
        [HttpGet]
        public List<Tracker> GetAll()
        {
            return DAL.GetAllTrackers();
        }

        [HttpPost]
        public Tracker Add(Tracker track)
        {
            return DAL.AddTracker(track);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            DAL.DeleteTracker(id);
        }


        [HttpGet("{hab_id}")]
        public List<TrackerResults> GetResults(int hab_id)
        {
            return DAL.GetTrackerResults(hab_id);
        }



    }
}
