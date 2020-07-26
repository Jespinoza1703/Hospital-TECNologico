import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {auth, User} from 'firebase/app';
import {IPatient} from '../Interfaces/IPatient';
import {IAdmin} from '../Interfaces/IAdmin';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: User;

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router
  ) {
  }

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('You have been successfully registered!');
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign in with email/password
  SignIn(email, password, type) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (type === 'patient') {
          this.router.navigate(['patient-view']);
        }
        if (type === 'admin') {
          this.router.navigate(['admin-view']);
        }
        if (type === 'doctor') {
          this.router.navigate(['doctor-view']);
        }
      }).catch((error) => {
        window.alert(error.message);
      });
  }
}
