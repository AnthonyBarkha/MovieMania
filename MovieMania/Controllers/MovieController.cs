using Microsoft.AspNetCore.Http;
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
    public class MovieController : Controller
    {
        [HttpGet("[action]/{userId}")]
        public List<Movie> GetAvailableMovies(int userId)
        {
            MovieRepository mr = new MovieRepository();
            return mr.GetAvailableMovies(userId);
        }

        [HttpPost("[action]")]
        public void AddToProfile([FromBody] UserMovie userMovie)
        {
            MovieRepository mr = new MovieRepository();
            mr.AddToProfile(userMovie);
        }

        [HttpGet("[action]/{userId}")]
        public List<ProfileMovie> GetProfileMovies(int userId)
        {
            MovieRepository mr = new MovieRepository();
            return mr.GetProfileMovies(userId);
        }

        [HttpDelete("[action]/{id}")]
        public void RemoveMovie(int id)
        {
            MovieRepository mr = new MovieRepository();
            mr.RemoveMovie(id);
        }

        [HttpPut("[action]")]
        public void RateMovie([FromBody] UserMovie userMovie)
        {
            MovieRepository mr = new MovieRepository();
            mr.RateMovie(userMovie);
        }

    }
}
