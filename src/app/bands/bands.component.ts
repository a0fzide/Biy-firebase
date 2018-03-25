import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { FormsModule, NgForm  } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Band, bands } from '../bands';
import { DataService } from '../data.service';
import { Pipe, PipeTransform} from '@angular/core';

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
  my_bands;
  band: Band;
  bands;
  all_bands;
  firestorebands: Band[];

 term = '';


  constructor(
    public _dataService: DataService,
  ) { }

  ngOnInit() {
     this._dataService.getBands2().subscribe( firebands => {
      this.firestorebands = firebands;
      console.log(this.firestorebands[0]);
      }
    );

    // this.firestorebands = this._dataService.getBands();
    console.log('BELOW HERE');
    console.log(this.firestorebands);
    this.bands = bands.filter((band, idx) => idx < bands.length + 1);
    this.all_bands = bands.filter((band, idx) => idx < bands.length + 1);
  }



}
