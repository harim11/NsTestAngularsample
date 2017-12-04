import { ModuleWithProviders, NgModule } from '@angular/core';
import { NsTestHomeComponent } from './NsTest-home.component';
import { HomeAuthResolver } from './NsTest-home-auth-resolver.service';
import { SharedModule } from '../shared';
import { homeRouter } from './home.router';

@NgModule({
  imports: [
    homeRouter,
    SharedModule
  ],
  declarations: [
    NsTestHomeComponent
  ],
  providers: [
    HomeAuthResolver
  ]
})
export class HomeModule {}
