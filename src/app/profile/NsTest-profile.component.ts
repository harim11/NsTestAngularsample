import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User, NsTestUserService, Profile } from '../shared';

@Component({
  selector: 'profile-page',
  templateUrl: './NsTest-profile.component.html'
})
export class NsTestProfileProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: NsTestUserService
  ) {}

  profile: Profile;
  currentUser: User;
  isUser: boolean;

  ngOnInit() {
    this.route.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
        // Load the current user's data.
        this.userService.currentUser.subscribe(
          (userData: User) => {
            this.currentUser = userData;
            this.isUser = (this.currentUser.username === this.profile.username);
          }
        );
      }
    );



  }

  onToggleFollowing(following: boolean) {
    this.profile.following = following;
  }

}
