import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPathology} from '../Interfaces/IPathology';
import {IMedicalProcedures} from '../Interfaces/IMedicalProcedures';
import {IBed} from '../Interfaces/IBed';
import {IMedicalEquipment} from '../Interfaces/IMedicalEquipment';
import {IRoom} from '../Interfaces/IRoom';
import {IPersonnel} from '../Interfaces/IPersonnel';
import {IPatient} from '../Interfaces/IPatient';
import {IHospital} from '../Interfaces/IHospital';

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
      case 'Rooms':
        observable =  this.httpGet<IRoom>(type);
        break;
      case 'MedicalEquipments':
        observable =  this.httpGet<IMedicalEquipment>(type);
        break;
      case 'Beds':
        observable =  this.httpGet<IBed>(type);
        break;
      case 'MedicalProcedures':
        observable =  this.httpGet<IMedicalProcedures>(type);
        break;
      case 'HospitalPersonnel':
        observable =  this.httpGet<IPersonnel>(type);
        break;
      case 'Pathologies':
        observable =  this.httpGet<IPathology>(type);
        break;
      case 'Patients':
        observable =  this.httpGet<IPatient>(type);
        break;
      case 'Hospital':
        observable =  this.httpGet<IHospital>(type);
        break;
      default:
        observable = {};
    }
    return observable;
  }

  getElementsWParams(type: string, params: string): Observable<any> {
    let observable;
    switch (type) {
      case 'Rooms':
        observable = this.httpGet<IRoom>(type + params);
        break;
      case 'ClinicalHistory':
        observable = this.httpGet<IHospital>(type + '?email=' + params);
        break;
      default:
        observable = {};
    }
    return observable;
  }


  deleteElements(type, PK): Observable<any> {
    let observable;
    switch (type) {
      case 'Rooms':
        observable =  this.httpDelete(type, PK);
        break;
      case 'MedicalEquipments':
        observable =  this.httpDelete(type, PK);
        break;
      case 'Beds':
        observable =  this.httpDelete(type, PK);
        break;
      case 'MedicalProcedures':
        observable =  this.httpDelete(type, PK);
        break;
      case 'HospitalPersonnel':
        observable =  this.httpDelete(type, PK);
        break;
      default:
        observable = {};
    }
    return observable;
  }

  postElements(resource, body): Observable<any> {
    let observable;
    switch (resource) {
      case 'Rooms':
        observable =  this.httpPost(resource, body);
        break;
      case 'MedicalEquipments':
        observable =  this.httpPost(resource, body);
        break;
      case 'Beds':
        observable =  this.httpPost(resource, body);
        break;
      case 'MedicalProcedures':
        observable =  this.httpPost(resource, body);
        break;
      case 'HospitalPersonnel':
        observable =  this.httpPost(resource, body);
        break;
      case 'Patients':
        observable =  this.httpPost(resource, body);
        break;
      case 'ClinicalHistory':
        observable =  this.httpPost(resource, body);
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

  private httpPost(resource, body): Observable< any > {
    console.log(this.url + resource);
    return this.http.post(this.url + resource, body);
  }
}
