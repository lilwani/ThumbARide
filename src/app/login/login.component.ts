import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  uname = '';
  pass = '';
  users = [];

  model = new Login();

  // tslint:disable-next-line: variable-name
  constructor(private _router: Router, private loginService: LoginService ) {
    this.loginService.getUsers()
    .subscribe(users => this.users = users);
  }

  onSubmit() {
    console.log(this.users[0].userName);
  }
}
