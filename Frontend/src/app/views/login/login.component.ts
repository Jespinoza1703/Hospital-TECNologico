import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {
  MPatient,
  MPersonnel
} from '../../models/AllModels';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {GeneralService} from '../../services/general.service';
import {DatePipe} from '@angular/common';

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
  public dropdownList: any = [];
  public dropdownLists = [];
  public dropdown = [
    {Procedures: 'Apendicectomía'},
    {Procedures: 'Biopsia de mama'},
    {Procedures: 'Cirugía de cataratas'},
    {Procedures: 'Cesárea'},
    {Procedures: 'Histerectomía'},
    {Procedures: 'Cirugía para la lumbalgia'},
    {Procedures: 'Mastectomía'},
    {Procedures: 'Amigdalectomía'}
  ];

  constructor(public authService: AuthService, public router: Router, private datePipe: DatePipe ) { }

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
    for (const key of this.currentModel) {
      if (key.FK) {
        this.loadData(key.FK);
      }
    }
  }
  // Sign in as Hospital Personnel
  signInHospitalPersonnel() {
    this.signingUp = true;
    this.currentModel = MPersonnel;
    this.onCreate();
    this.columns = this.getColumns();
    this.hospitalPersonnelSignIn = true;
    this.patientSignIn = false;
    this.type = 'doctor';
    localStorage.setItem('type', this.type);
    for (const key of this.currentModel) {
      if (key.FK) {
        this.loadData(key.FK);
      }
    }
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

  submit(email, password) {
    this.authService.SignUp(email, password, this.currentItem.Type).then(r => {
      this.currentItem.Birthday = this.datePipe.transform(this.currentItem.Birthday, 'yyyy/MM/dd');
      this.currentItem.StartDate = this.datePipe.transform(this.currentItem.StartDate, 'yyyy/MM/dd');
      this.newUser(email, this.currentItem.Type);
      if (r !== undefined) {
      }
    });
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

  // Gets all lists for the dropdown menu options
  getDropDownList(dropdown, fk) {
    this.dropdownList = [];
    let list;
    if (dropdown) {
      dropdown.forEach(e => {
        this.dropdownList.push(e.Procedures);
      });
    }
    list = [fk, this.dropdownList];
    this.dropdownLists.push(list);
  }

  // Gets the specific list for each dropdown, according to FK
  getOptionsList(fk): any {
    let result = [];
    this.dropdownLists.forEach(e => {
      if (e[0] === fk) {
        result = e[1];
      }
    });
    return result;
  }

  // Loads data from server to render dropdowns
  loadData(fk) {
    this.dropdownLists = [];
    this.getDropDownList(this.dropdown, fk);
  }

}
