// services/auth-guard.service.ts
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }
    canActivate() {
        if (this.authService.isLoggedIn() ) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

    canAuthenticate() {
        if (this.authService.isLoggedIn()) {
            return true;
        } else {
            return false;
        }
    }
}
