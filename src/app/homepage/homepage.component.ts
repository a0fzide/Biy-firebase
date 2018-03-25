import { AfterViewInit, Component, Renderer, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { venues } from '../venues';
import { articles } from '../news';
import { users } from '../users';
// s
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, AfterViewInit {
  @ViewChild('targetSet') h1;
  randomnews; randomband; randomvenue; // random
  bands_list; users_list; news_list; // all
  constructor( private _renderer: Renderer,
  ) { }

  ngOnInit() {
    // this.users_list = users.filter((user, first_name) => user.first_name === 'Rebecca');
    this.users_list = users.filter((user, idx) => idx);
    // this.bands_list = bands.filter((user, idx) => idx < 1);
    this.randomnews = articles[Math.floor(Math.random() * Math.floor(articles.length))];
    this.randomvenue = venues[Math.floor(Math.random() * Math.floor(venues.length))];
    // this.randomband = bands[Math.floor(Math.random() * Math.floor(bands.length))];


    console.log(this.randomnews);
  }
  ngAfterViewInit() {
    this._renderer.setElementStyle(
      this.h1.nativeElement,
      'color',
      'red'
    );
    }
  }

