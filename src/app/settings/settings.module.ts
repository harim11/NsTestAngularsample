import { ModuleWithProviders, NgModule } from '@angular/core';
import { NsTestSettingsComponent } from './NsTest-settings.component';
import {  SharedModule } from '../shared';
import { settingsRouter } from './settings.router';

@NgModule({
  imports: [
    SharedModule,
    settingsRouter
  ],
  declarations: [
    NsTestSettingsComponent
  ]
})
export class SettingsModule {}
