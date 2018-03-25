import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user;
  constructor(
    private _firebaseAuth: AngularFireAuth,
    private _router: Router,
    private _authService: AuthService,
  ) { }

  ngOnInit() {

    this.user = this._authService.getUserInfo();
    console.log(this.user);
  }
  logout() {
     this._authService.logout();
  }

  updateUserAnon() {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: 'Jane Q. User',
        photoURL: 'https://example.com/jane-q-user/profile.jpg'
    }).then(function() {
        // Update successful.
    }, function(error) {
        // An error happened.
    });

  }
  updateUserCreateUserAccount() {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: 'Jane Q. User',
        photoURL: 'https://example.com/jane-q-user/profile.jpg'
    }).then(function() {
        // Update successful.
    }, function(error) {
        // An error happened.
    });

  }

}
