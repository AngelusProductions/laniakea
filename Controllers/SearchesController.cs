using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using NEFormValidationSystem;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using NEValidationEDMX;
using System.Data;

namespace Laniakea.Controllers
{
    [Route("api/[controller]")]
    public class SearchesController : Controller
    {
        [HttpGet("[action]/{i}/{j}/{search}")]
        public JsonResult MasterSearch(int i, int j, string search)
        {
            var searchDict = new Dictionary<string, string>();
            var searchToObject = JsonConvert.DeserializeObject<Dictionary<string, string>>(search);
            foreach (var property in searchToObject)
            {
                string searchField = property.Key.Split("F")[0];
                searchField = $"{searchField.Substring(0, 1).ToUpper()}{searchField.Substring(1)}";
                searchDict.Add(searchField, property.Value.ToString());
            }

			var study = NEFormValidationObject.Fetcher.GetFromId<NEFormValidationSystem.Study>(i);
			var studyComponent = NEFormValidationObject.Fetcher.GetFromId<NEFormValidationSystem.StudyComponent>(j);

			var dt = NEValidationEDMX.Search.SearchResult(study.Server, study.DatabaseName, studyComponent.Guid, searchDict);
			var json =  Json(DataTableToJSONWithJSONNet(dt));
			return json;
        }

		public string DataTableToJSONWithJSONNet(DataTable table)
		{
			string JSONString = string.Empty;
			JSONString = JsonConvert.SerializeObject(table);
			return JSONString;
		}
	}
}