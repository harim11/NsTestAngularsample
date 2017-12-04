import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Article, NsTestArticlesService, NsTestUserService } from '../shared';

@Injectable()
export class EditableArticleResolver implements Resolve<Article> {
  constructor(
    private articlesService: NsTestArticlesService,
    private router: Router,
    private userService: NsTestUserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.articlesService.get(route.params['slug'])
           .map(
             article => {
               if (this.userService.getCurrentUser().username === article.author.username) {
                 return article;
               } else {
                 this.router.navigateByUrl('/');
               }

             }
           )
           .catch((err) => this.router.navigateByUrl('/'));

  }
}
