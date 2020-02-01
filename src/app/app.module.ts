import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// add  routingArray  from './app-routing.module' to import above;

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //routingArray
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
