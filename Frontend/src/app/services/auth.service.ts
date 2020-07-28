import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {auth, User} from 'firebase/app';
import {IPatient} from '../Interfaces/IPatient';
import {IAdmin} from '../Interfaces/IAdmin';
import * as firebase from 'firebase';
import {IDoctor} from '../Interfaces/IDoctor';
import {Observable} from 'rxjs';
import {IEmailAndType} from '../Interfaces/IEmailAndType';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: User;
  currentLoginEmail;

  emailAndType: Observable<any[]>;

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public afs: AngularFirestore
  ) {
    this.emailAndType = afs.collection('emailAndType').valueChanges();

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // Sign up with email/password
  SignUp(email, password, type) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        localStorage.setItem('type', type);
        const emailAssoc = [email, type];
        localStorage.setItem('emailAssoc', JSON.stringify(emailAssoc));
        window.alert('You have been successfully registered!');



      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign in with email/password
  async SignIn(email, password) {
    await this.getUsersType(email);
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        const type = localStorage.getItem('type');
        if (type === 'patient') {
          this.SetPatientData(result.user);
          this.router.navigate(['patient-view']);
        }
        if (type === 'admin') {
          this.SetAdminData(result.user);
          this.router.navigate(['admin-view']);
        }
        if (type === 'doctor') {
          this.SetDoctorData(result.user);
          this.router.navigate(['doctor-view']);
        }
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  SetAdminData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const adminData: IAdmin = {
      id: user.uid
    };
    localStorage.setItem('userData', JSON.stringify(adminData));
    return userRef.set(adminData, {
      merge: true
    });
  }

  SetPatientData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const patientData: IAdmin = {
      id: user.uid,
    };
    localStorage.setItem('userData', JSON.stringify(patientData));
    return userRef.set(patientData, {
      merge: true
    });
  }

  SetDoctorData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const doctorData: IAdmin = {
      id: user.uid,

    };
    localStorage.setItem('userData', JSON.stringify(doctorData));
    return userRef.set(doctorData, {
      merge: true
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null);
  }

  public createUserAssoc(data: {email: string, type: string}) {
    return this.afs.collection('items').add(data);
  }

  async getUsersType(email) {
    this.afs.collection('items').get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const documentId = doc.data();
        if (documentId.email === email) {
          this.currentLoginEmail = email;
          const result = documentId.type.toString();
          localStorage.setItem('type', result);
          console.log(result);
        }
      });
    });
  }

  LogOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('type');
      this.router.navigate(['home']);
      window.location.reload();
    });
  }
}

