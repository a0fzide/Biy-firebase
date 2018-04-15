import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { VenuesComponent } from './venues/venues.component';
import { NewsComponent } from './news/news.component';
import { BandsComponent } from './bands/bands.component';
import { InboxComponent } from './inbox/inbox.component';
import { ProfileComponent } from './profile/profile.component';
import { EmailLoginComponent } from './email-login/email-login.component';
import { EmailSignupComponent } from './email-signup/email-signup.component';
import { AddbandComponent } from './addband/addband.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth-guard.service';
import { GenresComponent } from './genres/genres.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent },
    { path: 'venues', component: VenuesComponent },
    { path: 'news', component: NewsComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'venues', component: VenuesComponent },
    { path: 'bands', component: BandsComponent },
    { path: 'inbox', component: InboxComponent },
    { path: 'login', component: EmailLoginComponent },
    { path: 'signup', component: EmailSignupComponent },
    { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent},
    { path: 'bands/addband', canActivate: [AuthGuard], component: AddbandComponent },
    { path: 'bands/genres', component: GenresComponent },
    { path: 'dashboard/updateuser', component: UpdateuserComponent },
    { path: 'dashboard/userprofile', component: UserprofileComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
