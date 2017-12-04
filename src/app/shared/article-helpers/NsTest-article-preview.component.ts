import { Component, Input } from '@angular/core';

import { Article } from '../models';

@Component({
  selector: 'article-preview',
  templateUrl: './NsTest-article-preview.component.html'
})
export class NsTestArticlePreviewComponent {
  @Input() article: Article;

  onToggleFavorite(favorited: boolean) {
    this.article['favorited'] = favorited;

    if (favorited) {
      this.article['favoritesCount']++;
    } else {
      this.article['favoritesCount']--;
    }
  }
}
