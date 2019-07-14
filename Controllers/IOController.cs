using System;
using System.Linq;
using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Laniakea.Controllers
{
    [Route("api/[controller]")]
    public class IOController : Controller
    {
        [HttpGet("[action]/{sponsor}/{protocol}")]
        public int CreateDVD(string sponsor, string protocol)
        {
            string sourcePath = $@"\\TITAN\NeForm42\PDFs\{sponsor}\{protocol}";
            string targetPath = $@"\\TITAN\NeForm42\Laniakea\PDFExportTesting";

            if (Directory.Exists(targetPath)) Directory.Delete(targetPath, true);
            
            foreach (string oldFolderPath in Directory.GetDirectories(sourcePath, "*", SearchOption.AllDirectories))
                Directory.CreateDirectory(oldFolderPath.Replace(sourcePath, targetPath));
            foreach (string newFolderPath in Directory.GetFiles(sourcePath, "*.*", SearchOption.AllDirectories))
                System.IO.File.Copy(newFolderPath, newFolderPath.Replace(sourcePath, targetPath), true);
            // zip it, open download dialogue
            return 200;
        }

        [HttpGet("[action]/{studyName}")]
        public JsonResult GetDirectoryInfo(string studyName)
        {
            string path = $@"\\TITAN\NeForm42\PDFs\{studyName}";
            var directoryInfo = new DirectoryInfo(path);
            if (!Directory.Exists(path)) return null;
            var subfolders = directoryInfo.GetDirectories();
            var dict = new Dictionary<string, string>()
            {
                { "withPhi", subfolders.Any(f => f.FullName == $@"{path}\With PHI").ToString() },
                { "withoutPhi", subfolders.Any(f => f.FullName == $@"{path}\Without PHI").ToString() },
                { "withTriggers", subfolders.Any(f => f.FullName == $@"{path}\With Triggers").ToString() },
                { "withoutTriggers", subfolders.Any(f => f.FullName == $@"{path}\Without Triggers").ToString() }
            };
            return Json(dict);
        }

        [HttpPost("[action]")]
        public void ExportRowsToPDF()
        {
            using (StreamReader reader = new StreamReader(Request.Body))
            { 
                var rowArray = JsonConvert.DeserializeObject<Row[]>(reader.ReadToEnd());
                Debugger.Break();
            }
        }
            
    }

    public class Row
    {
        public string Site;
        public string Subject;
        public string Visit;
        public string Form;
        public string Field;
        public string Answer;
        public string DateTime;
    }
}
