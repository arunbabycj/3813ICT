import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) {}



  loginUser(username, password) {
    //console.log(name, price, description, type);
    const issue = {
      username: username,
      password: password
    };
    return this.http.post(`${this.uri}/users/check`, issue);
  }




}
