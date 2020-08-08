import { Component, OnInit } from '@angular/core';
import {IClinicalHistory} from '../../../Interfaces/IClinicalHistory';
import {GeneralService} from '../../../services/general.service';
import {
  MClinicalHistory
} from '../../../models/AllModels';
import {AuthService} from '../../../services/auth.service';


@Component({
  selector: 'app-patient-clinical-history',
  templateUrl: './patient-clinical-history.component.html',
  styleUrls: ['./patient-clinical-history.component.scss']
})

export class PatientClinicalHistoryComponent implements OnInit {

  public currentData: any[];
  public data: any;
  public currentModel = MClinicalHistory;
  public displayedColumns = [];
  public columns = [];

  constructor(private generalService: GeneralService, public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getCurrentUserEmail().then(r => {
      this.currentData = [];
      this.generalService.getElementsWParams('ClinicalHistory', r).subscribe(data => {
        this.data = (data as any);
        console.log(this.data);
        this.currentData = this.data;
        this.displayedColumns = this.getDisplayedColumns();
        this.columns = this.getColumns();
      });
    });

  }

  getDisplayedColumns() {
    const cols: any = [];
    for (const i of this.currentModel) {
      if (i.column) {
        cols.push(i.column);
      }
    }
    return cols;
  }

  getColumns() {
    const cols: any = [];
    for (const i of this.currentModel) {
      if (i.db && i.db !== 'Id') {
        cols.push(i.db);
      }
    }
    return cols;
  }
}
