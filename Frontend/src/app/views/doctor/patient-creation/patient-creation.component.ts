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

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.onCreate();
  }

  // Creates item
  onCreate(): void {
    this.currentItem = {};
    for (const field of this.currentModel) {
      this.currentItem[field.db] = '';
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
    this.authService.getCurrentUserEmail().then(r => {
      console.log(r);
    });
    console.log('Crear reservacion');
  }
}
