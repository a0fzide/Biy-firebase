import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from './data.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

import { Band, bands } from './bands';

import { RouterModule, Routes, Router } from '@angular/router';

import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import * as firebase from 'firebase';
import {AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Book It Yourself';
  bands: Observable<Band[]>;
  IsLogged;
  constructor(
    private _authService: AuthService,
    private adminGuard: AuthGuard,
  ) {
    // this._dataService.getBands().subscribe( firebands => {
    //   this.firestorebands = firebands;
    //   console.log(this.firestorebands[0]);
    //   }

  }
  ngOnInit() {
    // this.IsLogged = this.adminGuard.canActivate();
    // console.log(this.IsLogged);
  }

}
