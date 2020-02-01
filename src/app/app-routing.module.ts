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

// export const routingArray = [ 'loginComponent' ] ;
// add the components in this array and use it in app module
