import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FetchedDataComponent } from './fetched-data/fetched-data.component';
import { FetchingDataService } from './fetching-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FetchedDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FetchingDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
