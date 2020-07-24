import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthenticationComponent } from './helpers/authentication/authentication.component';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: 'AIzaSyD-6TNE1crtB3bkqGCJnO7jBkviWdYuBHU',
      authDomain: 'hospital-tecnologico.firebaseapp.com',
      databaseURL: 'https://hospital-tecnologico.firebaseio.com',
      projectId: 'hospital-tecnologico',
      storageBucket: 'hospital-tecnologico.appspot.com',
      messagingSenderId: '374050726660',
      appId: '1:374050726660:web:30eb716d1df3160d41a651',
      measurementId: 'G-CSXQ5FV59T'
    }),
    MatPasswordStrengthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
