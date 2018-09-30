import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  searchIssue(data) {
    console.log(data);
    const issue = {description: data}
    return this.http.get(`${this.uri}/search/${data}`);
  }

  addIssue(name, price, description, type) {
    const issue = {
      name: name,
      price: price,
      description: description,
      type: type
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  updateIssue(id, name, price, description, type) {
    const issue = {
      name: name,
      price: price,
      description: description,
      type: type
    };
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }

  deleteIssue(id) {
   return this.http.get(`${this.uri}/issues/delete/${id}`);
 }

}
