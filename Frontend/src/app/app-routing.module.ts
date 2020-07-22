import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {DoctorAdminComponent} from './views/doctor-admin/doctor-admin.component';
import {HospitalAdminComponent} from './views/hospital-admin/hospital-admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'doctorAdmin', component: DoctorAdminComponent},
  { path: 'hospitalAdmin', component: HospitalAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
