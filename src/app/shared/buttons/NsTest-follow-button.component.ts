import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Profile } from '../models';
import { NsTestProfilesService, NsTestUserService } from '../services';

@Component({
  selector: 'follow-button',
  templateUrl: './NsTest-follow-button.component.html'
})
export class NsTestFollowButtonComponent {
  constructor(
    private profilesService: NsTestProfilesService,
    private router: Router,
    private userService: NsTestUserService
  ) {}

  @Input() profile: Profile;
  @Output() onToggle = new EventEmitter<boolean>();
  isSubmitting = false;

  toggleFollowing() {
    this.isSubmitting = true;

    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        // Not authenticated? Push to login screen
        if (!authenticated) {
          this.router.navigateByUrl('/login');
          return;
        }

        // Follow this profile if we aren't already
        if (!this.profile.following) {
          this.profilesService.follow(this.profile.username)
          .subscribe(
            data => {
              this.isSubmitting = false;
              this.onToggle.emit(true);
            },
            err => this.isSubmitting = false
          );

        // Otherwise, unfollow this profile
        } else {
          this.profilesService.unfollow(this.profile.username)
          .subscribe(
            data => {
              this.isSubmitting = false;
              this.onToggle.emit(false);
            },
            err => this.isSubmitting = false
          );
        }

      }
    )


  }

}
