import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'src/app/login/login.component';
// import {Component} from 'Component ts file'

const routes: Routes = [
  {path: 'login' , component : LoginComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingArray = [  LoginComponent ] ;
// add the components in this array and use it in app module
