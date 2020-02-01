import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingArray } from './app-routing.module';
// add  routingArray  from './app-routing.module' to import above. './' one dot represents current directory;

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routingArray
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
