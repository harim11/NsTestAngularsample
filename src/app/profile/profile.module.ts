import { ModuleWithProviders, NgModule } from '@angular/core';
import { NsTestProfileArticlesComponent } from './NsTest-profile-articles.component';
import { NsTestProfileProfileComponent } from './NsTest-profile.component';
import { NsTestProfileFavoritesComponent } from './NsTest-profile-favorites.component';
import { ProfileResolver } from './NsTest-profile-resolver.service';
import { SharedModule } from '../shared';
import { profileRouter } from './profile.router';

@NgModule({
  imports: [
    profileRouter,
    SharedModule
  ],
  declarations: [
    NsTestProfileArticlesComponent,
    NsTestProfileProfileComponent,
    NsTestProfileFavoritesComponent
  ],

  providers: [
    ProfileResolver
  ]
})
export class ProfileModule {}
