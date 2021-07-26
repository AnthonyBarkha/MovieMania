using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MovieMania.Models.Repositories
{
    public class MovieRepository
    {
        string cnxString = "Data Source=LAPTOP-S7JSLMF6;Initial Catalog=MovieMania;Integrated Security=true";

        public List<Movie> GetAvailableMovies(int userId)
        {
            SqlConnection con = new SqlConnection(cnxString);
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = @"Select * from Movie where Id not in (select MovieId from User_Movie where UserId = @Id)";
            cmd.Parameters.Clear();
            cmd.Parameters.AddWithValue("@Id", userId);
            con.Open();
            SqlDataReader rd = cmd.ExecuteReader();
            List<Movie> movies = new List<Movie>();
            if (rd.HasRows)
            {
                while (rd.Read())
                {
                    Movie movie = new Movie();
                    movie.Id = (Int32)rd["Id"];
                    movie.Title = rd["Title"].ToString();
                    movie.Description = rd["Description"].ToString();
                    movie.Genre = rd["Genre"].ToString();
                    movie.Image = rd["Image"].ToString();
                    movies.Add(movie);
                }
            }
            else
            {
                movies = null;
            }
            con.Close();
            return movies;
        }

        public void AddToProfile(UserMovie userMovie)
        {
            SqlConnection con = new SqlConnection(cnxString);
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = @"Insert into User_Movie (UserId, MovieId, Rating) values (@userId, @movieId, @rating)";
            cmd.Parameters.Clear();
            cmd.Parameters.AddWithValue("@userId", userMovie.UserId);
            cmd.Parameters.AddWithValue("@movieId", userMovie.MovieId);
            cmd.Parameters.AddWithValue("@rating", userMovie.Rating);
            con.Open();
            cmd.ExecuteNonQuery();
            con.Close();
        }

        public List<ProfileMovie> GetProfileMovies(int userId)
        {
            SqlConnection con = new SqlConnection(cnxString);
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = @"select um.Id, m.Title, m.Description, m.Genre, m.Image, um.rating
                                from Movie m
                                join User_Movie um
                                on m.Id = um.MovieId
                                where m.Id in (select MovieId from User_Movie where UserId = @userId) and um.UserId = @userId";
            cmd.Parameters.Clear();
            cmd.Parameters.AddWithValue("@userId", userId);
            con.Open();
            SqlDataReader rd = cmd.ExecuteReader();
            List<ProfileMovie> movies = new List<ProfileMovie>();
            if (rd.HasRows)
            {
                while (rd.Read())
                {
                    ProfileMovie pm = new ProfileMovie();
                    pm.Id = (Int32)rd["Id"];
                    pm.Title = rd["Title"].ToString();
                    pm.Description = rd["Description"].ToString();
                    pm.Genre = rd["Genre"].ToString();
                    pm.Image = rd["Image"].ToString();
                    pm.Rating = (Int32)rd["Rating"];
                    movies.Add(pm);
                }
            }
            else
            {
                movies = null;
            }
            con.Close();
            return movies;
        }

        public void RemoveMovie(int id)
        {
            SqlConnection con = new SqlConnection(cnxString);
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = @"Delete from User_Movie where Id = @id";
            cmd.Parameters.Clear();
            cmd.Parameters.AddWithValue("@id", id);
            con.Open();
            cmd.ExecuteNonQuery();
            con.Close();
        }

        public void RateMovie(UserMovie userMovie)
        {
            SqlConnection con = new SqlConnection(cnxString);
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = @"Update User_Movie set Rating = @rating where Id = @id";
            cmd.Parameters.Clear();
            cmd.Parameters.AddWithValue("@rating", userMovie.Rating);
            cmd.Parameters.AddWithValue("@id", userMovie.Id);
            con.Open();
            cmd.ExecuteNonQuery();
            con.Close();
        }

    }
}
