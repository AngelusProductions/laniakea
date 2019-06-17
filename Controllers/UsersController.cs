using System.Collections.Generic;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;
using NEFormValidationSystem;

namespace Laniakea.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private NessUser _currentUser = new NessUser();

        [HttpGet]
        public List<NessUser> GetUsers()
        {
            return NEValidation.NessUsers;
        }

        [HttpGet("[action]/{id}")]
        public JsonResult GetUser(long id)
        {
            return Json(NEValidation.NessUsers.Find((e) => e.Id == id));
        }

        [HttpGet("[action]")]
        public JsonResult GetCurrentUser()
        {
            if (_currentUser.Id == 0) _currentUser = NEValidation.NessUsers.Find((e) => e.Id == 2);
            return Json(_currentUser);
        }

        [HttpPost("[action]")]
        public JsonResult AttemptLogIn(string username, string password)
        {
            {
                string corey = "corey";
                //var user = new NessUser("Dungus", username);
                //user.Id = 3;
                //user.UserName = username;
                //user.TemporaryPassword = password;

                using (var client = new HttpClient())
                {
                    ////var content = new StringContent(user.ToString(), Encoding.UTF8, "application/json");
                    //string uri = $"https:/{Request.Path.Value.ToString()}";
                    //client.BaseAddress = new Uri(uri);
                    //var postTask = client.PostAsJsonAsync<NessUser>(uri, user);
                    //postTask.Wait();
                    //var result = postTask.Result;

                    return Json(_currentUser);
                }
            }
        }
    }
}