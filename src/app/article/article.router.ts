import { Routes, RouterModule } from '@angular/router';
import { NsTestArticleComponent } from './NsTest-article.component';
import { NSTestArticleCommentComponent } from './NsTest-article-comment.component';
import { ArticleResolver } from './NsTest-article-resolver.service';
import { MarkdownPipe } from './markdown.pipe';
import { TitleCasePipe } from './TitleCase.pipe';

const ARTICLE_ROUTER: Routes = [
   { 
    path: 'article/:slug',
    component: NsTestArticleComponent,
    resolve: {
      article: ArticleResolver
    }
  }
];

export const ArticleRouter = RouterModule.forRoot(ARTICLE_ROUTER ); 