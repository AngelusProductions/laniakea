using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Net.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NEFormValidationSystem;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Laniakea.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private NessUser _currentUser = new NessUser();
        private readonly List<NessUser> _users = NEValidation.NessUsers;

        [HttpGet]
        public List<NessUser> GetUsers()
        {
            return _users;
        }

        [HttpGet("[action]/{id}")]
        public JsonResult GetUser(long id)
        {
            return Json(_users.Find((e) => e.Id == id));
        }

        [HttpGet("[action]")]
        public JsonResult GetCurrentUser()
        {
            if (_currentUser.UserName == null) return null;
            return Json(_currentUser);
        }


        [HttpGet("[action]")]
        public void LogOut()
        {
            _currentUser = null;
        }

        [HttpPost("[action]")]
        public JsonResult AttemptLogIn()
        {
            using (StreamReader reader = new StreamReader(Request.Body))
            {
                var json = JsonConvert.DeserializeObject<JObject>(reader.ReadToEnd());
                var match = _users.Find(user =>
                       user.UserName          == json["Username"].ToString() 
                    && user.TemporaryPassword == json["Password"].ToString()
                );
                if (match == null) return null;
                _currentUser = match;
                return Json(_currentUser);
            }
        }
    }
}