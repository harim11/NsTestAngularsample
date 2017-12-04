import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { NsTestUserService } from './NsTest-user.service';

@Injectable()
export class NsTestAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: NsTestUserService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    return this.userService.isAuthenticated.take(1);

  }
}
