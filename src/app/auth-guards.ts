import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './core/auth.service';

/**
* @name AuthGuard
* @desc Application wide route protection to prevent users from accessing components with valid authentication access.
*/


@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {

    constructor(
    private router: Router,
    private authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.authService.isLogedIn()) {
            console.log('LoggedIn');
            return true;
        } else {
            console.log('Auth Guard Protection');
            console.log(this.authService.isLogedIn());
            /* Manipulation or accessing protected route will be navigated to access denied screen */
            this.router.navigate(['not-found']);
           // window.alert('You don\'t have permission to access this screen');
            return false;
        }
    }
}
