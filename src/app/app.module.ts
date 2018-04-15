import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Pipe, PipeTransform } from '@angular/core';
import { VenuesComponent } from './venues/venues.component';
import { NewsComponent } from './news/news.component';
import { InboxComponent } from './inbox/inbox.component';
import { BandsComponent } from './bands/bands.component';
import { ProfileComponent } from './profile/profile.component';
import { HomepageNewsComponent } from './homepage/homepage-news/homepage-news.component';
import { CommentsComponent } from './comments/comments.component';
import { AuthGuard } from './auth-guard.service';

import { AuthService } from './auth.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { DataService } from './data.service';
import { UploadService } from './uploads.service';


import { FilterPipe } from './filter.pipe';
import { EmailLoginComponent } from './email-login/email-login.component';
import { EmailSignupComponent } from './email-signup/email-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddbandComponent } from './addband/addband.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { GenresComponent } from './genres/genres.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  public transform(value, keys: string, term: string) {
        if (!term) {
            return value;
        }
    return (value || []).filter((band) => keys.split(',').some(key => band.hasOwnProperty(key) && new RegExp(term, 'gi').test(band[key])));
  }

}
@Pipe({
  name: 'truncateTitle'
})
export class TruncateTitlePipe implements PipeTransform {
  transform(value: string, limit = 50, completeWords = false, ellipsis = '') {
    if (completeWords) {
      limit = value.substr(0, 13).lastIndexOf(' ');
    }
    return `${value.substr(0, limit)}${ellipsis}`;
  }
}

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 250, completeWords = false, ellipsis = '...') {
    if (completeWords) {
      limit = value.substr(0, 13).lastIndexOf(' ');
    }
    return `${value.substr(0, limit)}${ellipsis}`;
  }
}


@NgModule({
  declarations: [
    SearchPipe,
    TruncateTitlePipe,
    TruncatePipe,
    FilterPipe,
    AppComponent,
    HomepageComponent,
    VenuesComponent,
    NewsComponent,
    InboxComponent,
    BandsComponent,
    ProfileComponent,
    HomepageNewsComponent,
    CommentsComponent,
    EmailLoginComponent,
    EmailSignupComponent,
    DashboardComponent,
    AddbandComponent,
    UserprofileComponent,
    UpdateuserComponent,
    GenresComponent,
    // FilterPipe
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase, 'BIY-rough'),
    AngularFirestoreModule,
    //    AngularFirestoreModule.enablePersistence(),
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    DataService,
    UploadService,
    // ProposalService,
    // DocumentService,
    // services go here.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
