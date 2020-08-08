import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {MPatient} from '../../../models/AllModels';
import {GeneralService} from '../../../services/general.service';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-patient-creation',
  templateUrl: './patient-creation.component.html',
  styleUrls: ['./patient-creation.component.scss']
})
export class PatientCreationComponent implements OnInit {
  public numberOfPathologies = 1;
  public numbers = [];
  public columns: any;
  public type = 'admin';
  public currentModel = MPatient;
  public currentItem = null;
  public dropdownList: any = [];
  public dropdownLists = [];
  public dropdown = [];
  constructor(public authService: AuthService, private generalService: GeneralService, private datePipe: DatePipe) { }

  ngOnInit(): void {

    this.onCreate();
  }

  // Creates item
  onCreate(): void {
    this.currentItem = {};
    for (const field of this.currentModel) {
      if (field.multiple && field.column) {
        this.currentItem[field.column] = field.db;
      }
      if (field.db === 'email' || field.db === 'id' || field.db === 'firstName' || field.db === 'lastName' ||
        field.db === 'phone' || field.db === 'adress' || field.db === 'treatment' || field.db === 'birthDay') {
        this.currentItem[field.db] = '';
      }
    }
  }

  // Submits new user data
  submit(email, password) {
    this.authService.SignUp(email, password, 'patient');
    this.newUser(email, 'patient');
  }

  // Associates new user type to its email
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


  generateDropdown(e) {
    this.numbers = [];
    this.numberOfPathologies = e.value;
    for (let i = 0; i < this.numberOfPathologies; i++) {
      this.numbers.push(i);
    }
    for (const key of this.currentModel) {
      if (key.FK) {
        this.loadData(key.FK);
      }
    }
  }


  onSubmit(): void {
    this.currentItem.birthDay = this.datePipe.transform(this.currentItem.birthDay, 'yyyy/MM/dd');
    this.submit(this.currentItem.email, '123456');
    this.generalService.postElements('Patients', this.currentItem).subscribe(respuesta => {
      console.log(respuesta);
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
