import { ModuleWithProviders, NgModule } from '@angular/core';

import { NsTestArticleComponent } from './NsTest-article.component';
import { NSTestArticleCommentComponent } from './NsTest-article-comment.component';
import { ArticleResolver } from './NsTest-article-resolver.service';
import { MarkdownPipe } from './markdown.pipe';
import { SharedModule } from '../shared';
import { ArticleRouter } from './article.router';
import { TitleCasePipe } from './TitleCase.pipe';

@NgModule({
  imports: [
    ArticleRouter,
    SharedModule
  ],
  declarations: [
    NsTestArticleComponent,
    NSTestArticleCommentComponent,
    MarkdownPipe,
    TitleCasePipe
  ],

  providers: [
    ArticleResolver
  ]
})
export class ArticleModule {}
