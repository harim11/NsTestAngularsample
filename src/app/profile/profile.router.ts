import { Routes, RouterModule } from '@angular/router';
import { NsTestProfileArticlesComponent } from './NsTest-profile-articles.component';
import { NsTestProfileProfileComponent } from './NsTest-profile.component';
import { NsTestProfileFavoritesComponent } from './NsTest-profile-favorites.component';
import { ProfileResolver } from './NsTest-profile-resolver.service';
const PROFILE_ROUTER: Routes = [
  {
    path: 'profile/:username',
    component: NsTestProfileProfileComponent,
    resolve: {
      profile: ProfileResolver
    },
    children: [
      {
        path: '',
        component: NsTestProfileArticlesComponent
      },
      {
        path: 'favorites',
        component: NsTestProfileFavoritesComponent
      }
    ]
  }
];



export const profileRouter = RouterModule.forRoot(PROFILE_ROUTER );