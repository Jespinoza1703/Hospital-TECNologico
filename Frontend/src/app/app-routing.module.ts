import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {AdminViewComponent} from './views/admin/admin-view/admin-view.component';
import {DoctorViewComponent} from './views/doctor/doctor-view/doctor-view.component';
import {PatientViewComponent} from './views/patient/patient-view/patient-view.component';
import {HomeComponent} from './views/home/home.component';
import {PatientReservationComponent} from './views/patient/patient-reservation/patient-reservation.component';
import {PatientClinicalHistoryComponent} from './views/patient/patient-clinical-history/patient-clinical-history.component';
import {PatientEvaluationComponent} from './views/patient/patient-evaluation/patient-evaluation.component';
import {ClinicalHistoryCreationComponent} from './views/doctor/clinical-history-creation/clinical-history-creation.component';
import {CotecSyncComponent} from './views/admin/cotec-sync/cotec-sync.component';
import {HospitalManagementComponent} from './views/admin/hospital-management/hospital-management.component';
import {PatientCreationComponent} from './views/doctor/patient-creation/patient-creation.component';
import {ReportsComponent} from './views/admin/reports/reports.component';


const routes: Routes = [
  { path: 'patient-view', component: PatientViewComponent},
  { path: 'patient-reservation', component: PatientReservationComponent},
  { path: 'patient-clinical-history', component: PatientClinicalHistoryComponent},
  { path: 'patient-evaluation', component: PatientEvaluationComponent},
  { path: 'doctor-view', component: DoctorViewComponent},
  { path: 'clinical-history-creation', component: ClinicalHistoryCreationComponent},
  { path: 'patient-creation', component: PatientCreationComponent},
  { path: 'admin-view', component: AdminViewComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'hospital-management', component: HospitalManagementComponent},
  { path: 'cotec-sync', component: CotecSyncComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
