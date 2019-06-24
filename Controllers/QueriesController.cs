using Microsoft.AspNetCore.Mvc;
using NEFormValidationSystem;

namespace Laniakea.Controllers
{
    [Route("api/[controller]")]
    public class QueriesController : Controller
    {
        [HttpGet]
        public JsonResult GetResults()
        {
            return Json(NEValidation.Studies);
        }
    }
}