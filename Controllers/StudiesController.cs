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

        [HttpGet("[action]/{subjectId}")]
        public List<Visit> GetVisits(long subjectId)
        {
            var subjectVisits = NEValidation.GetSubjectVisits($"SubjectId = {subjectId}");
            var visitList = new List<Visit>();
            foreach(SubjectVisit subjectVisit in subjectVisits)
                visitList.Add(NEValidation.Visits.Find((v) => v.Id == subjectVisit.VisitId));
            return visitList;
        }

        [HttpGet("[action]/{visitId}")]
        public Visit GetVisit(long visitId)
        {
            return NEValidation.Visits.Find((v) => v.Id == visitId);
        }

        [HttpGet("[action]/{visitId}")]
        public List<Form> GetForms(long visitId)
        {
            var visitForms = NEValidation.GetVisitForms($"VisitId = {visitId}");
            var formList = new List<Form>();
            foreach(VisitForm visitForm in visitForms)
                formList.Add(NEValidation.Forms.Find((v) => v.Id == visitForm.FormId));
            return formList;
        }

        [HttpGet("[action]/{formId}")]
        public Form GetForm(long formId)
        {
            return NEValidation.Forms.Find((f) => f.Id == formId);
        }

        [HttpGet("[action]/{subjectId}/{visitId}/{formId}")]
        public JsonResult GetSubjectVisitForm(long subjectId, long visitId, long formId)
        {
            var visitForm = NEValidation.VisitForms.Find( vf => vf.VisitId == visitId);
            var subjectVisitForms = NEValidation.SubjectVisitForms.Find( svf => svf.VisitFormId == visitForm.Id);
            return Json(subjectVisitForms);
        }
    }
}
