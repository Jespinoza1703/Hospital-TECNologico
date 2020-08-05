import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {AdminViewComponent} from './views/admin-view/admin-view.component';
import {DoctorViewComponent} from './views/doctor-view/doctor-view.component';
import {PatientViewComponent} from './views/patient-view/patient-view.component';
import {HomeComponent} from './views/home/home.component';
import {PatientReservationComponent} from './views/patient-reservation/patient-reservation.component';
import {PatientClinicalHistoryComponent} from './views/patient-clinical-history/patient-clinical-history.component';
import {PatientEvaluationComponent} from './views/patient-evaluation/patient-evaluation.component';
import {ClinicalHistoryCreationComponent} from './views/clinical-history-creation/clinical-history-creation.component';
import {CotecSyncComponent} from './views/cotec-sync/cotec-sync.component';
import {HospitalManagementComponent} from './views/hospital-management/hospital-management.component';
import {PatientCreationComponent} from './views/patient-creation/patient-creation.component';
import {ReportsComponent} from './views/reports/reports.component';


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
