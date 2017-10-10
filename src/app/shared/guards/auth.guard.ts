import { Router } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService : AuthService, private router : Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isLoggedIn().then(isLoggedIn => {
      if(!isLoggedIn){
        this.router.navigate(['login']);
      }
      return isLoggedIn;
    });
  }
}
