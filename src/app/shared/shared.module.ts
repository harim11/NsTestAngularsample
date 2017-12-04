import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NsTestArticleListComponent, NsTestArticleMetaComponent, NsTestArticlePreviewComponent } from './article-helpers';
import { NsTestFavoriteButtonComponent, NsTestFollowButtonComponent } from './buttons';
import { NsTestListErrorsComponent } from './NsTest-list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    NsTestArticleListComponent,
    NsTestArticleMetaComponent,
    NsTestArticlePreviewComponent,
    NsTestFavoriteButtonComponent,
    NsTestFollowButtonComponent,
    NsTestListErrorsComponent,
    ShowAuthedDirective
  ],
  exports: [
    NsTestArticleListComponent,
    NsTestArticleMetaComponent,
    NsTestArticlePreviewComponent,
    CommonModule,
    NsTestFavoriteButtonComponent,
    NsTestFollowButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NsTestListErrorsComponent,
    RouterModule,
    ShowAuthedDirective
  ]
})
export class SharedModule {}
