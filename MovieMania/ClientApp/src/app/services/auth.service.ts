import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AuthService {

  constructor(private http: HttpClient) { }

  register(firstName: string, lastName: string, username: string, password: string) {
    let body = {
      FirstName: firstName,
      LastName: lastName,
      Username: username,
      Password: password
    };
    return this.http.post("api/User/AddUser", body);
  }

  getUser(username: string, password: string) {
    return this.http.get("api/User/GetUser/"+ username + "/" + password);
  }
}
