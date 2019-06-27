using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using NEFormValidationSystem;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Laniakea.Controllers
{
    [Route("api/[controller]")]
    public class SearchesController : Controller
    {
        [HttpGet("[action]/{search}")]
        public JsonResult MasterSearch(string search)
        {
            var searchDict = new Dictionary<string, string>();
            var searchToObject = JsonConvert.DeserializeObject<JObject>(search);
            foreach (var property in searchToObject)
            {
                string searchField = property.Key.Split("F")[0];
                searchField = $"{searchField.Substring(0, 1).ToUpper()}{searchField.Substring(1)}";
                searchDict.Add(searchField, property.Value.ToString());
                Debugger.Break();
            }
            return Json(searchToObject);
        }
    }
}