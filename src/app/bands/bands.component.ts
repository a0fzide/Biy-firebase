import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';
import { FormsModule, NgForm  } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth-guard.service';
import { Observable } from 'rxjs/Observable';
import { Band, bands } from '../bands';
import { Upload } from '../uploads';
import { DataService } from '../data.service';
import { Pipe, PipeTransform} from '@angular/core';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore  } from 'angularfire2/firestore';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})




export class BandsComponent implements OnInit {
  messageCatch;
  searchStr;
  user;
  my_bands;
  message;
  band: Band;
  bands;
  all_bands;
  firestorebands: Band[];
  newfirestorebandstest: AngularFirestoreCollection<Band>;
  bandsCollection: AngularFirestoreCollection<Band>;
  bandtoEdit: Band;
  editState: Boolean = false;
  term = '';


  constructor(
    private afs: AngularFirestore,
    private _firebaseAuth: AngularFireAuth,
    public _dataService: DataService,
    private _authService: AuthService,
    private adminGuard: AuthGuard,
    private _router: Router,
  ) {
    this.user = this._authService.getUserInfo();
    console.log(this.user);

    this._dataService.getBands2().subscribe( firebands => {
      this.firestorebands = firebands;
      console.log(this.firestorebands[0]);
      }
    );
   }

  ngOnInit() {
    if (this._dataService.message != null) {
      this.messageCatch = this._dataService.message;
    } else {
      this.messageCatch = null;
    }

    this._dataService.getBands2().subscribe( firebands => {
      this.firestorebands = firebands;
      console.log(this.firestorebands[0]);
      }
    );

    this.bandtoEdit = null;
    this.user = this._authService.getUserInfo();
    console.log(this.user);

    this.bands = bands.filter((band, idx) => idx < bands.length + 1);
    this.all_bands = bands.filter((band, idx) => idx < bands.length + 1);
  }


 deleteBand(event, band) {
   this._dataService.deleteBand(band);
   this.messageCatch = this._dataService.message + ` "${band.bandname}"`;

 }

 editBand(event, band) {
   if (this.messageCatch != null) {
    this.messageCatch = null;
   }
    this.editState = true;
    this.bandtoEdit = band;
  }


  updateBand(band) {
    this.editState = false;
    this._dataService.editBand(band);
    this.messageCatch = this._dataService.message + ` "${band.bandname}"`;
    // this._router.navigate(['bands']);
  }


  clearState() {
    this.editState = false;
    this.bandtoEdit = null;
  }
  getStyle(band) {
    if (this.messageCatch && band.bandname === this.bandtoEdit.bandname) {
      return 'green';
    } else {
      return '';
    }
  }


  clearLocalMessage() {
    this.messageCatch = null;
    this._dataService.clearMessage();
  }

}
