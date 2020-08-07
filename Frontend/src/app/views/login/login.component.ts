import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {
  MPatient,
  MPersonnel
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
  public hospitalPersonnelSignIn = false;
  public numberOfPathologies = 1;
  public numbers = [];
  public currentModel;
  public columns: any;
  public type: any;
  loggedIn = false;
  signingUp = false;
  public currentItem = null;

  constructor(public authService: AuthService, public router: Router ) { }

  ngOnInit(): void {
    this.type = localStorage.getItem('type');
    if (this.type != null) {
      this.loggedIn = true;
    }
  }

  // Sign in as patient
  signInPatient() {
    this.currentModel = MPatient;
    this.onCreate();
    this.signingUp = true;
    this.columns = this.getColumns();
    this.patientSignIn = true;
    this.hospitalPersonnelSignIn = false;
    this.type = 'patient';
    localStorage.setItem('type', this.type);
  }
  // Sign in as doctor
  signInHospitalPersonnel() {
    this.signingUp = true;
    this.currentModel = MPersonnel;
    this.onCreate();
    this.columns = this.getColumns();
    this.hospitalPersonnelSignIn = true;
    this.patientSignIn = false;
    this.type = 'doctor';
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

  // Creates item
  onCreate(): void {
    this.currentItem = {};
    for (const field of this.currentModel) {
      this.currentItem[field.db] = '';
    }
  }

  submit(email, password, type) {
    this.authService.SignUp(email, password, type).then(r => {
      this.newUser(email, type);
    });
    console.log(this.currentItem);
  }


  generateDropdown(e) {
    this.numbers = [];
    this.numberOfPathologies = e.value;
    for (let i = 0; i < this.numberOfPathologies; i++) {
      this.numbers.push(i);
    }
  }

  public newUser(email, type) {
      const data = {
        email: '',
        type: ''
      };
      data.email = email;
      data.type = type;
      this.authService.createUserAssoc(data).then(() => {
        console.log('Documento creado exitósamente!');
      }, (error) => {
        console.error(error);
      });
  }

}
