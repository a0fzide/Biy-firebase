import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { Band } from './bands';

@Injectable()
export class DataService {
message;
editstate: Boolean = false;
bandsCollection: AngularFirestoreCollection<Band>;
bands: Observable<Band[]>;
bandDoc: AngularFirestoreDocument<Band>;
  constructor(
    public afs: AngularFirestore,
    private _router: Router,
  ) {
    this.bandsCollection = this.afs.collection('bands', ref => ref.orderBy('bandname'));
    this.bands = this.bandsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Band;
        data.id = a.payload.doc.id;
        return data;
      });
    });

  }
  getBands() {
    return this.bands;
  }
  getBands2() {
    this.bands = this.afs.collection('bands').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Band;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.bands;
  }


// Gettin Users Objects -   Gettin Users Objects  -  Gettin Users Objects  - Gettin Users Objects

usersBands(band: Band) {

  // return this.bands.filter( band => band.adminID )
}

// Gettin Users Objects -   Gettin Users Objects  -  Gettin Users Objects  - Gettin Users Objects

// BASIC CRUD
 addBand(band: Band) {
   band.created_at = new Date();
  // genres format
  band.bandname[1].toLocaleUpperCase() ;
  const newGenres = band.genres.toString().replace(/\s+/g, '');
  const genarray = newGenres.split(',');
  band.genres =  genarray;
  // members format
  const newMembers = band.members.toString().replace(', ', ',');
  const memarray = newMembers.split(',');
  band.members =  memarray;
  this.bandsCollection.add(band)
  .then((res) => this._router.navigate(['/bands']));
  this.message = `You have successfully created your band '${band.bandname}'`;
  return this.bandsCollection;
 }

 editBand(band: Band) {
   this.bandDoc = this.afs.doc(`bands/${band.id}`);
   band.bandname[1].toLocaleUpperCase() ;
  const newGenres = band.genres.toString().replace(/\s+/g, '');
  const genarray = newGenres.split(',');
  band.genres =  genarray;
  // members format
  const newMembers = band.members.toString().replace(', ', ',');
  const memarray = newMembers.split(',');
  band.members =  memarray;
   this.bandDoc.update(band);
   return this.message = `Successfuly updated your band '${band.bandname}'`;
 }


 deleteBand(band: Band) {
    this.bandDoc = this.afs.doc(`bands/${band.id}`);
    this.bandDoc.delete();
    return this.message = `Successfuly deleted your band '${band.bandname}'`;
 }
 clearMessage() {
    return this.message = null;
 }
}
