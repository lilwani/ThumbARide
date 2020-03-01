import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'src/app/login/login.component';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';
// import {Component} from 'Component ts file'

const routes: Routes = [
  {path: 'login' , component : LoginComponent },
  {path: 'welcome', component: WelcomeComponent },
  {path: '', redirectTo: '/welcome', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingArray = [  LoginComponent , WelcomeComponent] ;
// add the components in this array and use it in app module
