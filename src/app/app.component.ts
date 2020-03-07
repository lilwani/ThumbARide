import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements DoCheck {

  title = 'ThumbARide';
  welcome = 'Welcome ';
  loginTitle = 'Login';
  uname: string;


  // tslint:disable-next-line: variable-name
  constructor(private _router: Router ) {
  }

  ngDoCheck(): void {
    this.uname = sessionStorage.getItem('uname');
  }

  login() {
    this._router.navigate( ['/login'] );
  }

  toWelcome() {
    this._router.navigate( ['/welcome'] );
  }

}
