import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';
import { FormsModule, NgForm  } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth-guard.service';
import { Genre, genres } from '../genres';

import { Observable } from 'rxjs/Observable';
import { Band, bands } from '../bands';
import { DataService } from '../data.service';
import { Pipe, PipeTransform} from '@angular/core';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore  } from 'angularfire2/firestore';
@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  defaultTitle: String = null;
 allgenres = genres;
 genreList;
  messageCatch;
  searchStr;
  user;
  my_bands;
  message;
  constructor(
    private afs: AngularFirestore,
    private _firebaseAuth: AngularFireAuth,
    public _dataService: DataService,
    private _authService: AuthService,
    private adminGuard: AuthGuard,
    private _router: Router,
  ) { }

  ngOnInit() {
    if (this.defaultTitle === null) {
      this.defaultTitle = 'All Genres';
    }


    if (this._dataService.message != null) {
      this.messageCatch = this._dataService.message;
    } else {
      this.messageCatch = null;
    }
    this.user = this._authService.getUserInfo();

    this.genreList = genres;
  }



  filterGenre(category) { // remove this put in service WILL NOT WORK YOU KNOW BETTER NINA
    this.genreList = null;
    const newList = [];
    for (let i = 0; i < this.allgenres.length; i++) {
      if (category === this.allgenres[i]['parent']) {
        newList.push(this.allgenres[i]);
      }

    }
    category[0].toUpperCase();
    this.defaultTitle = `${category} Genre:`;
    return  this.genreList = newList;
  }

}


//
// Application name	BIY
// API key	2c562b6001efe73a016e09dfb910b26b
// Shared secret	9f35fa745b17d0ecdf2748802fdc0abb
// Registered to ninap41
