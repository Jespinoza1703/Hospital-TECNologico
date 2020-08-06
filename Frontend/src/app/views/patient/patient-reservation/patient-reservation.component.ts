import { Component, OnInit } from '@angular/core';
import {
  MBooking
} from '../../../models/AllModels';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-patient-reservation',
  templateUrl: './patient-reservation.component.html',
  styleUrls: ['./patient-reservation.component.scss']
})
export class PatientReservationComponent implements OnInit {

  public MBooking: any = MBooking;
  public numberOfProcedures = 1;
  public numbers = [];
  public currentItem: {} = null;
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

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    for (const key of MBooking) {
      if (key.FK) {
        this.loadData(key.FK);
      }
    }
  }

  onCreate(): void {
    this.currentItem = {};
    for (const field of MBooking) {
      this.currentItem[field.column] = '';
    }
  }


  onSubmit(): void {
    this.authService.getCurrentUserEmail().then(r => {
      console.log(r);
    });
    console.log('Crear reservacion');
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

  generateDropdown() {
    for (let i = 0; i < this.numberOfProcedures; i++) {
      this.numbers.push(i);
    }
  }

}
