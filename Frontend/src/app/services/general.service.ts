import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IRoom} from '../Interfaces/IRoom';
import {IMedicalEquipment} from '../Interfaces/IMedicalEquipment';
import {IBed} from '../Interfaces/IBed';
import {IPersonnel} from '../Interfaces/IPersonnel';
import {IMedicalProcedures} from '../Interfaces/IMedicalProcedures';
import {IPathology} from '../Interfaces/IPathology';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private url = 'https://luciaapi.azurewebsites.net/api/';

  constructor(private http: HttpClient) { }


  getData(type) {
    return this.http.get('assets/' + type + '.json');
  }

  getElements(type: string): Observable<any> {
    let observable;
    switch (type) {
      case 'Room':
        // observable =  this.httpGet<IRoom>(type);
        observable =  this.getData(type);
        break;
      case 'MedicalEquipment':
        // observable =  this.httpGet<IMedicalEquipment>(type);
        observable =  this.getData(type);
        break;
      case 'Bed':
        // observable =  this.httpGet<IBed>(type);
        observable =  this.getData(type);
        break;
      case 'MedicalProcedures':
        // observable =  this.httpGet<IMedicalProcedures>(type);
        observable =  this.getData(type);
        break;
      case 'Personnel':
        // observable =  this.httpGet<IPersonnel>(type);
        observable =  this.getData(type);
        break;
      case 'Pathologies':
        observable =  this.httpGet<IPathology>(type);
        break;
      default:
        observable = {};
    }

    return observable;
  }

  deleteElements(type, PK): Observable<any> {
    let observable;
    switch (type) {
      case 'room':
        observable =  this.httpDelete(type, PK);
        break;
      case 'medicalEquipment':
        observable =  this.httpDelete(type, PK);
        break;
      case 'bed':
        observable =  this.httpDelete(type, PK);
        break;
      case 'medicalProcedures':
        observable =  this.httpDelete(type, PK);
        break;
      case 'personnel':
        observable =  this.httpDelete(type, PK);
        break;
      default:
        observable = {};
    }
    return observable;
  }


  // calls http.get() with the corresponding resource url.
  private httpGet<T>(resource: string): Observable<T> {
    return this.http.get<T>(this.url + resource);
  }

  private httpDelete<T>(resource, PK): Observable<T> {
    return this.http.delete<T>(this.url + resource + PK);
  }

}
