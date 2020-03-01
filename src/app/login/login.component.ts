import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname = '';
  pass = '';

  model = new Login();

  constructor(private _router: Router) { }

  ngOnInit() {
  }
}
