import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { PatientViewComponent } from './views/patient/patient-view/patient-view.component';
import { DoctorViewComponent } from './views/doctor/doctor-view/doctor-view.component';
import { AdminViewComponent } from './views/admin/admin-view/admin-view.component';
import { LoginComponent } from './views/login/login.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import { NavbarComponent } from './helpers/navbar/navbar.component';
import { FooterComponent } from './helpers/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { PatientReservationComponent } from './views/patient/patient-reservation/patient-reservation.component';
import { PatientClinicalHistoryComponent } from './views/patient/patient-clinical-history/patient-clinical-history.component';
import { PatientEvaluationComponent } from './views/patient/patient-evaluation/patient-evaluation.component';
import { HospitalManagementComponent } from './views/admin/hospital-management/hospital-management.component';
import { CotecSyncComponent } from './views/admin/cotec-sync/cotec-sync.component';
import { ReportsComponent } from './views/admin/reports/reports.component';
import { PatientCreationComponent } from './views/doctor/patient-creation/patient-creation.component';
import { ClinicalHistoryCreationComponent } from './views/doctor/clinical-history-creation/clinical-history-creation.component';
import {MatTableModule} from '@angular/material/table';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PatientViewComponent,
    DoctorViewComponent,
    AdminViewComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PatientReservationComponent,
    PatientClinicalHistoryComponent,
    PatientEvaluationComponent,
    HospitalManagementComponent,
    CotecSyncComponent,
    ReportsComponent,
    PatientCreationComponent,
    ClinicalHistoryCreationComponent
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
    FormsModule,
    MatTableModule
  ],
  providers: [AuthService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
