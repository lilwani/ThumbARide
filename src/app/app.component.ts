import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ThumbARide';

  // tslint:disable-next-line: variable-name
  constructor(private _router: Router ) {}

  login() {
    this._router.navigate( ['/login'] );
  }

  toWelcome() {
    this._router.navigate( ['/welcome'] );
  }

}
