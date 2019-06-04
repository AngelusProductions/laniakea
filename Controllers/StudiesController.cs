using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace Laniakea.Controllers
{
    [Route("api/[controller]")]
    public class StudiesController : Controller
    {
        private static List<Study> Studies = new List<Study>()
        {
            new Study() { Id = 1, Name = "MAP", Logo = "https://ness-production.s3.amazonaws.com/avexis.png"},
            new Study() { Id = 2, Name = "Restore", Logo = "https://ness-production.s3.amazonaws.com/restore.png"},
            new Study() { Id = 3, Name = "Otsuka", Logo = "https://ness-production.s3.amazonaws.com/otsuka.png"}
        };

        [HttpGet]
        public List<Study> GetStudies()
        {
            return Studies;
        }

        [HttpGet("[action]/{id}")]
        public Study GetStudy(long id)
        {
            return Studies.Find((e) => e.Id == id);
        }

        [HttpPost]
        public IActionResult AddStudy([FromBody]Study data)
        {
            data.Id = Studies.Count + 1;
            Studies.Add(data);
            return Ok(new
            {
                success = true,
                returncode = "200"
            });
        }

        public class Study
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Logo { get; set; }
        }

    }
}
