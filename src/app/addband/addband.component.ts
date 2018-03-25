import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

// import { Band, bands } from '.../band/bands';
@Component({
  selector: 'app-addband',
  templateUrl: './addband.component.html',
  styleUrls: ['./addband.component.css']
})

export class AddbandComponent implements OnInit {

band = {
        bandname: '',
        admin: '',
        bio: '',
        website: '',
        pic: '',
        hometown: 'Chicago',
        state: 'IL',
        likes: 0,
        members: [],
        upcomingShows: [],
        genres: [],
    };

  constructor(
    private _dataService: DataService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.band.bandname !== '' && this.band.bio !== '') {
      this._dataService.addBand();
    }

  }

}
