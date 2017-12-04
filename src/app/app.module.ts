import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRouter } from './app.router';
import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';
import { EditorModule } from './editor/editor.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';
import { BookModule } from './Books/book.module';
import {
  ApiService,
  NsTestArticlesService,
  NsTestAuthGuard,
  NsTestCommentsService,
  NsTestFooterComponent,
  NsTestHeaderComponent,
  NsTestJwtService,
  NsTestProfilesService,
  SharedModule,
  NsTestTagsService,
  NsTestUserService,
  NsTestCRUDbooksService,
} from './shared';

@NgModule({
  declarations: [
    AppComponent,
    NsTestFooterComponent,
    NsTestHeaderComponent
  ],
  imports: [
    BrowserModule,
    appRouter,
    ArticleModule,
    AuthModule,
    EditorModule,
    HomeModule,
    ProfileModule,
    SharedModule,
    SettingsModule,
    BookModule
  ],
  providers: [
    ApiService,
    NsTestArticlesService,
    NsTestAuthGuard,
    NsTestCommentsService,
    NsTestJwtService,
    NsTestProfilesService,
    NsTestTagsService,
    NsTestUserService,
    NsTestCRUDbooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
