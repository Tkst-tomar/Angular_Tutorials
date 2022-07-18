import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AppRouting123Module } from './app-routing123.module';

// @NgModule({
//   declarations: [
//     AppComponent,
//     DepListComponent,     //! Instead of adding all the components one by one, we can
//     DepDetailsComponent   //! make an array with all the components to be routed in
//   ],                      //! app-routing.module.ts and export the same
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
@NgModule({
  declarations: [
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [routingComponent[0]]
})
export class AppModule { }
