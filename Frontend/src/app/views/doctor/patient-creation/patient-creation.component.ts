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

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  submit(email, password) {
    this.authService.SignUp(email, password, 'patient');
    this.newUser(email, 'patient');
  }

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
