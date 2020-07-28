import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  type = '';
  isDoctorUser = false;
  isPatientUser = false;
  isAdminUser = false;

  constructor(public authService: AuthService) {
    this.type = localStorage.getItem('type');
  }

  ngOnInit(): void {
  }

  isPatient() {
    this.type = localStorage.getItem('type');
    if (this.type === 'patient') {
      this.isDoctorUser = false;
      this.isPatientUser = true;
      this.isAdminUser = false;
    }
    return this.isPatientUser;
  }

  isDoctor() {
    this.type = localStorage.getItem('type');
    if (this.type === 'doctor') {
      this.isDoctorUser = true;
      this.isPatientUser = false;
      this.isAdminUser = false;
    }
    return this.isDoctorUser;
  }

  isAdmin() {
    this.type = localStorage.getItem('type');
    if (this.type === 'admin') {
      this.isDoctorUser = false;
      this.isPatientUser = false;
      this.isAdminUser = true;
    }
    return this.isAdminUser;
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
}
