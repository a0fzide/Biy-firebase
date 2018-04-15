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
  message;
  constructor(
    private _firebaseAuth: AngularFireAuth,
    private _router: Router,
    private _authService: AuthService,
  ) { }

  ngOnInit() {

    this.user = this._authService.getUserInfo();
    console.log(this.user);
  }

  getUserMessage() {
    return this.message;
  }

  logout() {
     this._authService.logout();
  }

  updateUserBasic() {
    const user = firebase.auth().currentUser;
    user.updateProfile(
      {
        displayName: user.email,
        photoURL: '/assets/static/anon_img.png'
    }).then(function() {
      this.message = `Your display name will be Anonymous`;
    }, function(error) {
      this.message = `Uh Oh! Error occured! shoot and email to ` + `ninapalumbo@gmail.com` + `. We want to improve our website!`;
    });
  }

  updateUserCreateUserAccount() {
    const user = firebase.auth().currentUser;
    this.message = `Your display name will be Anonymous`;
    user.updateProfile({
        displayName: 'Anonymous',
        photoURL: '/assets/static/anon_img.png'
    }).then(function() {
        // Update successful.
    }, function(error) {
        // An error happened.
    });

  }

}
