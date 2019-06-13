import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

login = {
  email: '',
  password: ''
}

  constructor(private httpClient: HttpClient) { }

  ngOnInit() { }

  handleLogin(formLogin: NgForm) {
    if (formLogin.valid) {
      this.httpClient
        .post('http://localhost:3200/login', this.login)
        .subscribe(
          (response) => {
            console.log(response);
            console.log('deu certo');
          },
          (error) => {
            console.error(error);
            console.log('deu ruim');
          }
        )
    }
  }
}
