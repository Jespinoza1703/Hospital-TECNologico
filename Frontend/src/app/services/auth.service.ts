import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {auth, User} from 'firebase/app';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: User;
  currentLoginEmail;
  resultType = '';

  emailAndType: Observable<any[]>;
  private authState: any;

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public afs: AngularFirestore
  ) {
    this.emailAndType = afs.collection('emailAndType').valueChanges();
    this.afAuth.authState.subscribe( authState => {
      this.authState = authState;
    });
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
    const type = localStorage.getItem('type');
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (type === 'patient') {
          this.router.navigate(['patient-reservation']);
          console.log(type);
        }
        if (type === 'admin') {
          this.router.navigate(['hospital-management']);
        }
        if (type === 'doctor') {
          this.router.navigate(['patient-creation']);
        }
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // Verifies if a user is currently logged in
  get isLoggedIn(): boolean {
    return (this.authState !== null);
  }

  // Creates a firebase doc for associating email with user type
  public createUserAssoc(data: {email: string, type: string}) {
    return this.afs.collection('items').add(data);
  }

  async getUsersType(email, password) {
    this.afs.collection('items').get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const documentId = doc.data();
        if (documentId.email === email) {
          this.currentLoginEmail = email;
          this.resultType = documentId.type.toString();
          localStorage.setItem('type', this.resultType);
          this.SignIn(email, password);
        }
      });
    });
  }

  async getCurrentUserEmail() {
    return this.authState.email;
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

