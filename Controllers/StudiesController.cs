using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;
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
            return Json(NEValidation.Studies.Find((s) => s.Id == id));
        }

        [HttpGet("[action]/{id}")]
        public List<StudyComponent> GetStudyComponents(long id)
        {
            var study = NEValidation.Studies.Find((s) => s.Id == id);
            return study.StudyComponents().ToList();
        }

        [HttpGet("[action]/{studyComponentId}")]
        public List<NEFormValidationSystem.Site> GetSites(long studyComponentId)
        {
            return NEValidation.GetSites($"StudyComponentId = {studyComponentId}");
        }

        [HttpGet("[action]/{siteId}")]
        public List<Subject> GetSubjects(long siteId)
        {
            return NEValidation.GetSubjects($"SiteId = {siteId}");
        }

        [HttpGet("[action]/{id}")]
        public Subject GetSubject(long id)
        {
            return NEValidation.Subjects.Find((s) => s.Id == id);
        }
    }
}
