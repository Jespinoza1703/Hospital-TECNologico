import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { HospitalAdminComponent } from './views/hospital-admin/hospital-admin.component';
import { DoctorAdminComponent } from './views/doctor-admin/doctor-admin.component';
import { EvaluationComponent } from './Tools/evaluation/evaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HospitalAdminComponent,
    DoctorAdminComponent,
    EvaluationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
