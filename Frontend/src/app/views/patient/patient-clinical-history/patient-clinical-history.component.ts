import { Component, OnInit } from '@angular/core';
import {IClinicalHistory} from '../../../Interfaces/IClinicalHistory';


const ELEMENT_DATA: IClinicalHistory[] = [
  {position: 1, date: 'Hydrogen', procedure: '1.0079', treatment: 'H'},
  {position: 2, date: 'Helium', procedure: '4.0026', treatment: 'He'},
  {position: 3, date: 'Lithium', procedure: '6.941', treatment: 'Li'},
  {position: 4, date: 'Beryllium', procedure: '9.0122', treatment: 'Be'},
  {position: 5, date: 'Boron', procedure: '10.811', treatment: 'B'},
  {position: 6, date: 'Carbon', procedure: '12.0107', treatment: 'C'},
  {position: 7, date: 'Nitrogen', procedure: '14.0067', treatment: 'N'},
  {position: 8, date: 'Oxygen', procedure: '15.9994', treatment: 'O'},
  {position: 9, date: 'Fluorine', procedure: '18.9984', treatment: 'F'},
  {position: 10, date: 'Neon', procedure: '20.1797', treatment: 'Ne'},
];


@Component({
  selector: 'app-patient-clinical-history',
  templateUrl: './patient-clinical-history.component.html',
  styleUrls: ['./patient-clinical-history.component.scss']
})

export class PatientClinicalHistoryComponent implements OnInit {

  displayedColumns: string[] = ['position', 'date', 'procedure', 'treatment'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
