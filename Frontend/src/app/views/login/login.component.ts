import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {
  MPatient,
  MDoctor,
  MAdmin
} from '../../models/AllModels';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Attributes
  public patientSignIn = false;
  public doctorSignIn = false;
  public adminSignIn = false;
  public currentModel;
  public columns: any;
  public type: any;
  loggedIn = false;
  signingUp = false;
  signUpUser = {
    email: '',
    password: ''
  };
  signInUser = {
    email: '',
    password: ''
  };

  constructor(public authService: AuthService, public router: Router ) { }

  ngOnInit(): void {
    this.type = localStorage.getItem('type');
    if (this.type != null) {
      this.loggedIn = true;
    }
  }

  // Sign in as patient
  signInPatient() {
    this.signingUp = true;
    this.currentModel = MPatient;
    this.columns = this.getColumns();
    this.patientSignIn = true;
    this.doctorSignIn = false;
    this.adminSignIn = false;
    this.type = 'patient';
    localStorage.setItem('type', this.type);
  }
  // Sign in as doctor
  signInDoctor() {
    this.signingUp = true;
    this.currentModel = MDoctor;
    this.columns = this.getColumns();
    this.doctorSignIn = true;
    this.adminSignIn = false;
    this.patientSignIn = false;
    this.type = 'doctor';
    localStorage.setItem('type', this.type);
  }
  // Sign in as administrative personnel
  signInAdmin() {
    this.signingUp = true;
    this.currentModel = MAdmin;
    this.columns = this.getColumns();
    this.adminSignIn = true;
    this.patientSignIn = false;
    this.doctorSignIn = false;
    this.type = 'admin';
    localStorage.setItem('type', this.type);
  }

  // Gets current columns and adds options column
  getColumns() {
    const cols: any = [];
    for (const i of this.currentModel) {
      cols.push(i.column);
    }
    return cols;
  }

  signUp() {
    this.authService.SignUp(this.signUpUser.email, this.signUpUser.password);
  }

  signIn() {
      this.authService.SignIn(this.signInUser.email, this.signInUser.password, this.type);
  }
}