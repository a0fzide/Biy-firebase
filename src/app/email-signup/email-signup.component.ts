import { Component, OnInit } from '@angular/core';
import { User } from '../users';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormsModule, NgForm  } from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-email-signup',
  templateUrl: './email-signup.component.html',
  styleUrls: ['./email-signup.component.css']
})
export class EmailSignupComponent implements OnInit {
  error;
  user = {
    email: '',
    password: '',
  };

 constructor(
    private _authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

onSubmit() {
    this._authService.signUp(this.user.email, this.user.password)
    .then((res) => {
      console.log(res);

      this.router.navigate(['dashboard']);
   })
   .catch((err) => this.error = err);
  }

}
