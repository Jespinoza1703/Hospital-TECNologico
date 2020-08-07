import { Component, OnInit } from '@angular/core';
import {
  MClinicalHistory
} from '../../../models/AllModels';
import {GeneralService} from '../../../services/general.service';

@Component({
  selector: 'app-clinical-history-creation',
  templateUrl: './clinical-history-creation.component.html',
  styleUrls: ['./clinical-history-creation.component.scss']
})
export class ClinicalHistoryCreationComponent implements OnInit {

  public MClinicalHistory: any = MClinicalHistory;
  public patients = [];
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

  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
    for (const key of MClinicalHistory) {
      if (key.FK) {
        this.loadData(key.FK);
      }
    }
    this.generalService.getData('patient').subscribe(data => {
      this.patients = this.getPatients(data as any);
    });
  }

  getPatients(data): any {
    console.log(data);
    const cols: any = [];
    data.forEach(e => {
        cols.push(e.id);
    });
    console.log(cols);
    return cols;
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


  onSubmit(): void {
    console.log('Crear historia clínica');
  }


}
