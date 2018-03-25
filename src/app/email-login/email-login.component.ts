import { Component, OnInit, HostBinding } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Band, bands } from '../bands';
import { DataService } from '../data.service';
import { AngularFireModule } from 'angularfire2';
import { ActivatedRoute, Params } from '@angular/router';
import { FormsModule, NgForm  } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {trigger, state, style, animate, transition } from '@angular/animations';

import { User } from '../users';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.css'],
})
export class EmailLoginComponent implements OnInit {
  private user: Observable<firebase.User>;

  user_email = {
    email: '',
    password: ''
 };
 error;
 constructor(
    private _authService: AuthService,
    private _firebaseAuth: AngularFireAuth,
    private router: Router,
  ) { }
  ngOnInit() {
  }

  signInWithFacebook() {
    this._authService.signInWithFacebook()
    .then((res) => {
        this.router.navigate(['']);
      })
    .catch((err) => console.log(err));
  }

  signInWithEmail() {
    this._authService.signInRegular(this.user_email.email, this.user_email.password)
       .then((res) => {
          console.log(res);
          this.router.navigate(['dashboard']);
       })
       .catch((err) => this.error = err);
 }



}
