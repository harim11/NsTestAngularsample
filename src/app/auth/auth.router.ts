import { Routes, RouterModule } from '@angular/router';
import { NsTestAuthComponent } from './NsTest-auth.component';
import { NoAuthGuard } from './NsTest-no-auth-guard.service';

const AUTH_ROUTER: Routes = [
     {
        path: 'login',
        component: NsTestAuthComponent,
        canActivate: [NoAuthGuard]
      },
      {
        path: 'register',
        component: NsTestAuthComponent,
        canActivate: [NoAuthGuard]
      }
];

export const AuthRouter = RouterModule.forRoot(AUTH_ROUTER );