import { Component, OnInit } from '@angular/core';
import {
  MRoom,
  MMedicalEquipment,
  MBed,
  MMedicalProcedures,
  MPersonnel
} from '../../../models/AllModels';
import {GeneralService} from '../../../services/general.service';
import {AuthService} from '../../../services/auth.service';


@Component({
  selector: 'app-hospital-management',
  templateUrl: './hospital-management.component.html',
  styleUrls: ['./hospital-management.component.scss']
})
export class HospitalManagementComponent implements OnInit {
  objectKeys = Object.keys;
  objectValues = Object.values;


  currentData: any;
  columns;
  currentModel;
  editStatus = false;
  currentItem = null;
  public currentType;
  public dropdownList: any = [];
  public dropdownLists = [];
  public dropdown;
  public MRoom: any = MRoom;
  public MMedicalEquipment: any = MMedicalEquipment;
  public MBed: any = MBed;
  public MMedicalProcedures: any = MMedicalProcedures;
  public MPersonnel: any = MPersonnel;
  private data: any;

  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
  }

  // Allows change of admin view models
  changeModels(type, model) {
    this.currentData = [];
    this.currentType = type;
    this.generalService.getData(type).subscribe(data => {
      this.data = (data as any).data;
      this.currentData = this.data;
      this.currentModel = model;
      this.columns = this.getColumns();
      for (const key of this.currentModel) {
        if (key.FK) {
          this.loadData(this.data, key.FK);
        }
      }
    });
  }


  // Deletes item
  onDelete(item): void {
    let PK: any;
    for (const field of this.currentModel){
      if (field.PK) {
        PK = field.column;
        break;
      }
    }
    this.currentItem = item;
    // PK value
    console.log(item[PK]);
    // this.generalService.deleteElements(this.currentType, PKvalue);
  }


  // Updates or edits item
  onUpdate(item): void {
    let PK: any;
    for (const field of this.currentModel) {
      if (field.PK) {
        PK = field.column;
        break;
      }
    }
    this.currentItem = item;
    this.editStatus = true;
    // PK value
    console.log(item[PK]);
    // this.generalService.editElements(this.currentType, PKvalue);
  }

  // Creates item
  onCreate(): void {
    this.currentItem = {};
    for (const field of this.currentModel) {
      this.currentItem[field.column] = '';
    }
    this.editStatus = true;
  }

  // Closes editing or creating mode
  onClose(): void {
    this.editStatus = false;
  }

  // Gets current columns and adds options column
  getColumns() {
    const cols: any = [];
    for (const i of this.currentModel) {
      cols.push(i.column);
    }
    cols.push('Accions');
    return cols;
  }

  // Gets all lists for the dropdown menu options
  getDropDownList(dropdown, fk) {
    this.dropdownList = [];
    let list;
    if (dropdown) {
      dropdown.forEach(e => {
        if (e.Id) {
          this.dropdownList.push(e.Id);
        }
        if (e.Country_Location_Id) {
          this.dropdownList.push(e.Country_Location_Id);
        }
        if (e.Regions) {
          this.dropdownList.push(e.Regions);
        } else {
          this.dropdownList.push(e.Name);
        }
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
  loadData(data, fk) {
    this.dropdownLists = [];
    const type = (fk + 'SP');
    this.generalService.getData(type).subscribe(dropDownData => {
      this.dropdown = (dropDownData as any);
      this.getDropDownList(this.dropdown, fk);
    });
  }
}
