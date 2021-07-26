using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MovieMania.Models.Repositories
{
    public class UserRepository
    {
        string cnxString = "Data Source=LAPTOP-S7JSLMF6;Initial Catalog=MovieMania;Integrated Security=true";

        public void AddUser(User user)
        {
            SqlConnection con = new SqlConnection(cnxString);
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = @"Insert into [User] (FirstName, LastName, Username, Password) values (@fname, @lname, @uname, @pass)";
            cmd.Parameters.Clear();
            cmd.Parameters.AddWithValue("@fname", user.FirstName);
            cmd.Parameters.AddWithValue("@lname", user.LastName);
            cmd.Parameters.AddWithValue("@uname", user.Username);
            cmd.Parameters.AddWithValue("@pass", user.Password);
            con.Open();
            cmd.ExecuteNonQuery();
            con.Close();
        }

        public User GetUser(string username, string password)
        {
            SqlConnection con = new SqlConnection(cnxString);
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = @"Select * from [User] where Username = @uname and Password = @pass";
            cmd.Parameters.Clear();
            cmd.Parameters.AddWithValue("@uname", username);
            cmd.Parameters.AddWithValue("@pass", password);
            con.Open();
            SqlDataReader rd = cmd.ExecuteReader();
            User user = new User();
            if(rd.HasRows)
            {
                while(rd.Read())
                {
                    user.Id = (Int32)rd["Id"];
                    user.FirstName = rd["FirstName"].ToString();
                    user.LastName = rd["LastName"].ToString();
                    user.Username = rd["Username"].ToString();
                    user.Password = rd["Password"].ToString();
                }
            }
            else
            {
                user = null;
            }
            con.Close();
            return user;
        }
    }
}
