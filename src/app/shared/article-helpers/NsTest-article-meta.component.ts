import { Component, Input } from '@angular/core';

import { Article } from '../models';

@Component({
  selector: 'article-meta',
  templateUrl: './NsTest-article-meta.component.html'
})
export class NsTestArticleMetaComponent {
  @Input() article: Article;
}
