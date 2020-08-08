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
  public dropdown = [];

  constructor(public authService: AuthService, public router: Router, private datePipe: DatePipe,
              private generalService: GeneralService ) { }

  ngOnInit(): void {
    this.type = localStorage.getItem('type');
    if (this.type != null) {
      this.loggedIn = true;
    }

  }

  // Sign in as patient
  signInPatient() {
    this.type = 'patient';
    localStorage.setItem('type', this.type);
    this.currentModel = MPatient;
    for (const key of this.currentModel) {
      if (key.FK) {
        this.loadData(key.FK);
      }
    }
    this.onCreate();
    this.signingUp = true;
    this.columns = this.getColumns();
    this.patientSignIn = true;
    this.hospitalPersonnelSignIn = false;

  }
  // Sign in as Hospital Personnel
  signInHospitalPersonnel() {
    this.signingUp = true;
    this.currentModel = MPersonnel;
    for (const key of this.currentModel) {
      if (key.FK) {
        this.loadData(key.FK);
      }
    }
    this.onCreate();
    this.type = this.currentItem.type;
    localStorage.setItem('type', this.type);
    this.columns = this.getColumns();
    this.hospitalPersonnelSignIn = true;
    this.patientSignIn = false;

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
      if (field.multiple && field.db) {
        this.currentItem[field.column] = field.db;
      }
      if (field.db === 'email' || field.db === 'id' || field.db === 'firstName' || field.db === 'lastName' ||
        field.db === 'phonenumber' || field.db === 'adress' || field.db === 'treatment' || field.db === 'birthDay' ||
      field.db === 'startDate' || field.db === 'type') {
        this.currentItem[field.db] = '';
      }
    }
  }

  submit(email, password) {
    this.authService.SignUp(email, password, this.currentItem.type).then(r => {
        console.log(this.currentItem.type);
        this.newUser(email, this.currentItem.type);
        if (this.currentItem.type === 'doctor' || this.currentItem.type === 'admin') {
          this.currentItem.startDate = this.datePipe.transform(this.currentItem.startDate, 'yyyy/MM/dd');
          this.currentItem.birthDay = this.datePipe.transform(this.currentItem.birthDay, 'yyyy/MM/dd');
          const body = {
            Email: this.currentItem.email,
            Hospitalid: 123,
            Id: this.currentItem.id,
            Phonenumber: this.currentItem.phonenumber,
            Birthday: this.currentItem.birthDay,
            Firstname: this.currentItem.firstName,
            Lastname: this.currentItem.lastName,
            Adress: this.currentItem.adress,
            Type: this.currentItem.type,
            Startdate: this.currentItem.startdate
          };
          console.log(body);
          this.generalService.postElements('HospitalPersonnel', body).subscribe(response => {
            console.log(response);
          });
        }
        if (this.type === 'patient') {
          this.currentItem.birthDay = this.datePipe.transform(this.currentItem.birthDay, 'yyyy/MM/dd');
          const body = {
            Email: this.currentItem.email,
            Id: this.currentItem.id,
            Phonenumber: this.currentItem.phonenumber,
            Birthday: this.currentItem.birthDay,
            Firstname: this.currentItem.firstName,
            Lastname: this.currentItem.lastName,
            Adress: this.currentItem.adress,
            pathologies: this.currentItem.Pathologies
          };

          console.log(body);
          this.generalService.postElements('Patients', body).subscribe(respuesta => {
            console.log(respuesta);
          });
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
        this.dropdownList.push(e.Name);
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
    this.generalService.getElements(fk).subscribe(dropDownData => {
      this.dropdown = (dropDownData as any);
      this.getDropDownList(this.dropdown, fk);
    });
  }

}
