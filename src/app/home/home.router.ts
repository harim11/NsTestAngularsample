import { Routes, RouterModule } from '@angular/router';
import { NsTestHomeComponent } from "app/home/NsTest-home.component";
import { HomeAuthResolver } from './NsTest-home-auth-resolver.service';
const HOME_ROUTER: Routes = [
    {
        path: '',
        component: NsTestHomeComponent,
        resolve: {
          isAuthenticated: HomeAuthResolver
        }
      }
];

export const homeRouter = RouterModule.forRoot(HOME_ROUTER );