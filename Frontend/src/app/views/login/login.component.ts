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

  constructor(public authService: AuthService, public router: Router, private datePipe: DatePipe, private generalService: GeneralService ) { }

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
    this.type = 'doctor';
    localStorage.setItem('type', this.type);
    this.signingUp = true;
    this.currentModel = MPersonnel;
    for (const key of this.currentModel) {
      if (key.FK) {
        this.loadData(key.FK);
      }
    }
    this.onCreate();
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
      if (field.multiple && field.column) {
        this.currentItem[field.column] = field.db;
      }
      if (field.db === 'Email' || field.db === 'Id' || field.db === 'FirstName' || field.db === 'LastName' ||
        field.db === 'Phone' || field.db === 'Address' || field.db === 'Treatment' || field.db === 'Birthday') {
        this.currentItem[field.db] = '';
      }
    }
  }

  submit(email, password) {
    console.log(this.currentItem);
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
      console.log(this.dropdown);
      this.getDropDownList(this.dropdown, fk);
    });
  }

}
