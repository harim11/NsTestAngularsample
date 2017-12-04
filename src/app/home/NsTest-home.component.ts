import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleListConfig, NsTestTagsService, NsTestUserService } from '../shared';

@Component({
  selector: 'home-page',
  templateUrl: './NsTest-home.component.html',
  styleUrls: ['./NsTest-home.component.css']
})
export class NsTestHomeComponent implements OnInit {
  constructor(
    private router: Router,
    private tagsService: NsTestTagsService,
    private userService: NsTestUserService
  ) {}

  isAuthenticated: boolean;
  listConfig: ArticleListConfig = new ArticleListConfig();
  tags: Array<string> = [];
  tagsLoaded = false;
  myname :string ;
  ngOnInit() {
    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;

        // set the article list accordingly
        if (authenticated) {
          this.setListTo('feed');
        } else {
          this.setListTo('all');
        }
      }
    );

    this.tagsService.getAll()
    .subscribe(tags => {
      this.tags = tags;
      if(tags.length > 0)
      {
        this.myname= "east";
      }
      this.tagsLoaded = true;
    });
  }

  setListTo(type: string = '', filters: Object = {}) {
    // If feed is requested but user is not authenticated, redirect to login
    if (type === 'feed' && !this.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return;
    }

    // Otherwise, set the list object
    this.listConfig = {type: type, filters: filters};
  }
}
