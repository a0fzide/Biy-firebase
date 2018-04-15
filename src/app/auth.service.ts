import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  band;
  public userDetails: firebase.User = null;
constructor(
  private _firebaseAuth: AngularFireAuth,
  private router: Router) {
  this.user = _firebaseAuth.authState;
  // const userRef: AngularFirestoreDocument<User> = this._firebaseAuth.doc()

this.user.subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;
            console.log(this.userDetails);
          } else {
            this.userDetails = null;
          }
        }


      );
  }
  signUp(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
 }
  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );
    console.log('signed');
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
 }
signInWithTwitter() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    );
  }
signInWithFacebook() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }
signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }
isLoggedIn() {
  if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }
logout() {
    this._firebaseAuth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
  }

  getUserInfo() {
    console.log(this.userDetails);

    console.log('From get userInfo Userdetails ^');
    return this.userDetails;
  }
  pushBand(band) {

    return this.userDetails;
  }

}

