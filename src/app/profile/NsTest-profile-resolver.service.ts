import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Profile, NsTestProfilesService } from '../shared';

@Injectable()
export class ProfileResolver implements Resolve<Profile> {
  constructor(
    private profilesService: NsTestProfilesService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.profilesService.get(route.params['username'])
           .catch((err) => this.router.navigateByUrl('/'));

  }
}