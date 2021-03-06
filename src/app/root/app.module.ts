import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { environment } from '../../environments/environment'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SquareListComponent } from '../cmps/square-list/square-list.component';
import { SquareAppComponent } from '../pages/square-app/square-app.component';
import { SquarePreviewComponent } from '../cmps/square-preview/square-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareListComponent,
    SquareAppComponent,
    SquarePreviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
