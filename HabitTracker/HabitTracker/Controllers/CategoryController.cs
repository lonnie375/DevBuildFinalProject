using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HabitTracker.Controllers
{
    [Route("category")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        [HttpGet]
        public List<Category> GetAll()
        {
            return DAL.GetAllCategories();
        }

        [HttpGet("{id}")]
        public Category Get(int id)
        {
            return DAL.GetOneCategory(id);
        }
    }
}
