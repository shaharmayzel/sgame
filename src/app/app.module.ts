import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SquareListComponent } from './cmps/square-list/square-list.component';
import { SquareDetailsComponent } from './cmps/square-details/square-details.component';
import { SquareAppComponent } from './pages/square-app/square-app.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareListComponent,
    SquareDetailsComponent,
    SquareAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
