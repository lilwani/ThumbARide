import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import {loginComponent} from 'loginPage' and all the other compnents you generate

const routes: Routes = [
  // {path: 'login' , component : loginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingArray = [ 'loginComponent' ] ;
// without quotation and then use this array in app.modules
