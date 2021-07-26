using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovieMania.Models;
using MovieMania.Models.Repositories;

namespace MovieMania.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {


        [HttpGet("[action]/{username}/{password}")]
        public User GetUser(string username, string password)
        {
            UserRepository ur = new UserRepository();
            return ur.GetUser(username, password);
        }

        [HttpPost("[action]")]
        public void AddUser([FromBody] User user)
        {
            UserRepository ur = new UserRepository();
            ur.AddUser(user);
        }



    }
}
