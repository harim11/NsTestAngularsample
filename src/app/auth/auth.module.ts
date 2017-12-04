import { ModuleWithProviders, NgModule } from '@angular/core';
import { NsTestAuthComponent } from './NsTest-auth.component';
import { NoAuthGuard } from './NsTest-no-auth-guard.service';
import { SharedModule } from '../shared';
import { AuthRouter } from './auth.router';

@NgModule({
  imports: [
    AuthRouter,
    SharedModule
  ],
  declarations: [
    NsTestAuthComponent
  ],

  providers: [
    NoAuthGuard
  ]
})
export class AuthModule {}
