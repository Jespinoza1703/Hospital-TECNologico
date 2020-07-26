import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthenticationComponent } from './helpers/authentication/authentication.component';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { PatientViewComponent } from './views/patient-view/patient-view.component';
import { DoctorViewComponent } from './views/doctor-view/doctor-view.component';
import { AdminViewComponent } from './views/admin-view/admin-view.component';
import { LoginComponent } from './views/login/login.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    PatientViewComponent,
    DoctorViewComponent,
    AdminViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatPasswordStrengthModule,
    MatInputModule,
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
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
