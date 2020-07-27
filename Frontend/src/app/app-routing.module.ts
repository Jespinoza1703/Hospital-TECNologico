import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {AdminViewComponent} from './views/admin-view/admin-view.component';
import {DoctorViewComponent} from './views/doctor-view/doctor-view.component';
import {PatientViewComponent} from './views/patient-view/patient-view.component';
import {HomeComponent} from './views/home/home.component';


const routes: Routes = [
  { path: 'patient-view', component: PatientViewComponent},
  { path: 'doctor-view', component: DoctorViewComponent},
  { path: 'admin-view', component: AdminViewComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
