import { Component, OnInit } from '@angular/core';

import { User } from '../models';
import { NsTestUserService } from '../services';

@Component({
  selector: 'layout-header',
  templateUrl: './NStest_header.component.html'
})
export class NsTestHeaderComponent implements OnInit {
  constructor(
    private userService: NsTestUserService
  ) {}

  currentUser: User;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    )
  }
}
