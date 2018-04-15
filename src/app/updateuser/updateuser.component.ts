import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { UploadService } from '../uploads.service';
import { Upload } from '../uploads';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
user;
message;
selectedFiles: FileList | null;
currentUpload: Upload;
uploads: Observable<Upload[]>;
showSpinner = true;
@Input() upload: Upload;
  constructor(
    private _firebaseAuth: AngularFireAuth,
    private _router: Router,
    private _uploadService: UploadService,
    private _authService: AuthService,
    private _dataService: DataService,
  ) { }

  ngOnInit() {
    this.uploads = this._uploadService.getUploads();
    this.uploads.subscribe(() => this.showSpinner = false);
    this.user = this._authService.getUserInfo();
    console.log(this.user);
  }

  detectFiles($event: Event) {
    this.selectedFiles = ($event.target as HTMLInputElement).files;
}

  uploadSingle() {
    const file = this.selectedFiles;
    if (file && file.length === 1) {
      this.currentUpload = new Upload(file.item(0));
      this._uploadService.pushUpload(this.currentUpload);
    } else {
      console.error('No file found!');
    }
  }
  uploadMulti() {
    const files = this.selectedFiles;
    if (!files || files.length === 0) {
      console.error('No Multi Files found!');
      return;
    }

    Array.from(files).forEach((file) => {
      this.currentUpload = new Upload(file);
      this._uploadService.pushUpload(this.currentUpload);
    });
  }


  deleteUpload() {
    this._uploadService.deleteUpload(this.upload);
  }


  getUserMessage() {
    return this.message;
  }

  logout() {
     this._authService.logout();
  }

  updateUserBasic() {
    const user = firebase.auth().currentUser;
    user.updateProfile(
      {
        displayName: user.email,
        photoURL: '/assets/static/anon_img.png'
    }).then(function() {
      this.message = `Your display name will be Anonymous`;
    }, function(error) {
      this.message = `Uh Oh! Error occured! shoot and email to ` + `ninapalumbo@gmail.com` + `. We want to improve our website!`;
    });
  }

}
