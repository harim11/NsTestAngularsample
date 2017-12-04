import { Routes, RouterModule } from '@angular/router';
import { NsTestSettingsComponent } from "app/settings/NsTest-settings.component";
import { NsTestAuthGuard, SharedModule } from '../shared';
const SETTINGS_ROUTER: Routes = [
    {
        path: 'settings',
        component: NsTestSettingsComponent,
        canActivate: [NsTestAuthGuard]
      }
];

export const settingsRouter = RouterModule.forRoot(SETTINGS_ROUTER );