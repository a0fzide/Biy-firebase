import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Show, shows } from '../shows';
import {  venues } from '../venues';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {
all_shows_list;
showComments: boolean;
all_venues;
conversation;
  constructor() { }

  ngOnInit() {
    this.all_venues = venues;
    this.all_shows_list = shows;
    console.log(this.all_shows_list);
  }


}
