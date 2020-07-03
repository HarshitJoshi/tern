import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string;
  password: string;
  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(){
    const { email, password } = this;
    return this.http.post(`${this.uri}/login`, { username: email, password }).subscribe(console.log);
  }
}
