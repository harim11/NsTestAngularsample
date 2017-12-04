import { Component, OnInit } from '@angular/core';

import { NsTestUserService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor (
    private userService: NsTestUserService
  ) {}

  ngOnInit() {
    this.userService.populate();
  }
}
