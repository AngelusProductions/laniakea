using System.IO;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Laniakea.Controllers
{
    [Route("api/[controller]")]
    public class IOController : Controller
    {
        [HttpGet("[action]/{studyId}/{withPHI}/{withTriggers}")]
        public JsonResult CreateDVD(long studyId, bool withPHI, bool withTriggers)
        {
            var directoryInfo = new DirectoryInfo($"\\\\TITAN\\NeForm42\\PDFs\\{studyId}\\");
            Directory.Exists(directoryInfo.FullName);
            return Json(directoryInfo);
        }
    }
}
