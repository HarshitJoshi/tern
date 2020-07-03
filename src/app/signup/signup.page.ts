import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  uri = `http://localhost:3000`

  fullname: string;
  email: string;
  password: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  register() {
    const { fullname, email, password } = this;
    return this.http.post(`${this.uri}/register`, { fullname, email, password }).subscribe((result) => {
      console.log(result);
    }), err => console.error(' I wass here', err);
  }
}
