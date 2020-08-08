import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {MPatient} from '../../../models/AllModels';

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
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    for (const key of this.currentModel) {
      if (key.FK) {
        this.loadData(key.FK);
      }
    }
    this.onCreate();
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
  }


  onSubmit(): void {
    console.log(this.currentItem);
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
