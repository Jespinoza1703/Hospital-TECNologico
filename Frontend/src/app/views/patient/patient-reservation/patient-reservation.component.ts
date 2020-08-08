import { Component, OnInit } from '@angular/core';
import {
  MBooking
} from '../../../models/AllModels';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {GeneralService} from '../../../services/general.service';

@Component({
  selector: 'app-patient-reservation',
  templateUrl: './patient-reservation.component.html',
  styleUrls: ['./patient-reservation.component.scss']
})
export class PatientReservationComponent implements OnInit {

  public MBooking: any = MBooking;
  public numberOfProcedures = 1;
  public numbers = [];
  public currentItem = null;
  public dropdownList: any = [];
  public dropdownLists = [];
  public dropdown = [];

  constructor(public authService: AuthService, private datePipe: DatePipe, private generalService: GeneralService) {
  }

  ngOnInit(): void {
    this.onCreate();
    for (const key of MBooking) {
      if (key.FK) {
        this.loadData(key.FK);
      }
    }
  }

  onCreate(): void {
    this.currentItem = {};
    for (const field of MBooking) {
      if (field.multiple && field.column) {
        this.currentItem[field.column] = field.db;
      }
      if (field.db === 'startDate' || field.db === 'finishDate') {
        this.currentItem[field.db] = '';
      }
    }
  }


  onSubmit(): void {
    this.currentItem.startDate = this.datePipe.transform(this.currentItem.startDate, 'yyyy/MM/dd');
    console.log(this.currentItem);
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
    console.log(fk);
    this.generalService.getElements(fk).subscribe(dropDownData => {
      this.dropdown = (dropDownData as any);
      this.getDropDownList(this.dropdown, fk);
    });
  }

  generateDropdown(e) {
    this.numbers = [];
    this.numberOfProcedures = e.value;
    for (let i = 0; i < this.numberOfProcedures; i++) {
      this.numbers.push(i);
    }
  }

}
