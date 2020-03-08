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
  users = [];
  isLoggedIn = 'false';
  model = new Login();
  valid = true;

  // tslint:disable-next-line: variable-name
  constructor(private _router: Router, private loginService: LoginService ) {
    this.loginService.getUsers()
    .subscribe(users => this.users = users);
  }

  onSubmit() {
    console.log(this.users[0].userName);
    sessionStorage.setItem('uname', this.model.uname);
    document.getElementById('welcome').style.display = '';
    const currUsername = this.model.uname;
    const currUserpass = this.model.pass;
    for (let index in this.users) {
      if (this.users[index].userName === currUsername && this.users[index].password === currUserpass) {
        this.isLoggedIn = 'true';
        sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
        this._router.navigate(['/welcome']);
      }
    }
    this.valid = false;
  }


}
