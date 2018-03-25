import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { FormsModule, NgForm  } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth-guard.service';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Band, bands } from '../bands';
import { DataService } from '../data.service';
import { Pipe, PipeTransform} from '@angular/core';
import * as firebase from 'firebase/app';
// import {  FilterPipe  } from './filter.pipe';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})




export class BandsComponent implements OnInit {
  searchStr;
  user;
  my_bands;
  band: Band;
  bands;
  all_bands;
  firestorebands: Band[];

 term = '';


  constructor(
    private _firebaseAuth: AngularFireAuth,
    public _dataService: DataService,
    private _authService: AuthService,
    private adminGuard: AuthGuard,
    private _router: Router,
  ) {
    this.user = this._authService.getUserInfo();
    console.log(this.user);
   }

  ngOnInit() {
    this.user = this._authService.getUserInfo();
    console.log(this.user);
    console.log('user info taken from auth service and put into user, Band comp');

     this._dataService.getBands2().subscribe( firebands => {
      this.firestorebands = firebands;
      console.log(this.firestorebands[0]);
      }
    );


    // this.firestorebands = this._dataService.getBands();
    // console.log(this.firestorebands); // must plug into observable collection
    this.bands = bands.filter((band, idx) => idx < bands.length + 1);
    this.all_bands = bands.filter((band, idx) => idx < bands.length + 1);
  }



}
