import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { Band } from './bands';

@Injectable()
export class DataService {
bandsCollection: AngularFirestoreCollection<Band>;
bands: Observable<Band[]>;
  constructor(
    public afs: AngularFirestore,
  ) {
    // this.bands = this.afs.collection('bands').valueChanges();
    this.bands = this.afs.collection('bands').snapshotChanges().map(changes => {
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

 addBand() {

 }
}
