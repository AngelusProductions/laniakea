using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using NEFormValidationSystem;

namespace Laniakea.Controllers
{
    [Route("api/[controller]")]
    public class StudiesController : Controller
    {
        [HttpGet]
        public List<Study> GetStudies()
        {
            return NEValidation.Studies;
        }

        [HttpGet("[action]/{id}")]
        public JsonResult GetStudy(long id)
        {
            
            return Json(NEValidation.Studies.Find((e) => e.Id == id));
        }

        [HttpGet("[action]/{id}")]
        public List<StudyComponent> GetStudyComponents(long id)
        {
            var study = NEValidation.Studies.Find((e) => e.Id == id);
            return study.StudyComponents().ToList();
        }
    }
}
