import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth-guard.service';
import { Upload } from '../uploads';

import { Router } from '@angular/router';
import { Band, bands } from '../bands';
import { Genre, genres } from '../genres';


// import { Band, bands } from '.../band/bands';
@Component({

  selector: 'app-addband',
  templateUrl: './addband.component.html',
  styleUrls: ['./addband.component.css']
})

export class AddbandComponent implements OnInit {
user;
band = <Band>{};
genresState: Boolean = false;
allgenres = genres;
firestorebands: Band[];
message;
users_current_bands;
// band = {
//         bandname: '',
//         admin: '',
//         adminID: '',
//         bio: '',
//         website: '',
//         pic: '',
//         hometown: 'Chicago',
//         state: 'IL',
//         likes: 0,
//         followers: 0,
//         members: [],
//         upcomingShows: [],
//         genres: [],
//         created_at: Date,
//     };
  constructor(
    private _dataService: DataService,
    private _authService: AuthService,
    private adminGuard: AuthGuard,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.user = this._authService.getUserInfo(); // user session DATA
    this._dataService.getBands2().subscribe( firebands => {
      this.firestorebands = firebands;
      this.users_current_bands = this.firestorebands.filter(band => band.adminID === this.user.uid);
      console.log(this.users_current_bands);
      console.log('this is the users bands');
      console.log(this.user.uid);
      },
    );
  }

  onSubmit() {
    if (this.band.bandname !== '' && this.band.bio !== '' && this.band.hometown !== '' && this.band.state !== '') {
      this.band.adminID = this.user.uid;

      this._dataService.addBand(this.band);
      this._authService.pushBand(this.band);
      this._dataService.getBands2();
      this.message = `You have successfully created your band
      "${this.band.bandname}"! Thanks for contributing to the DIY scene ${this.band.admin}.`;
    } else {
      this._router.navigate(['/addband']);
    }

  }
  showGenres() {
    this.genresState = true;
    return;
  }

}
