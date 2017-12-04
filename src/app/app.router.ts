import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {
        path: 'login',
        loadChildren: 'app/auth/auth.module#AuthModule'
    },
    {
        path: 'register',
        loadChildren: 'app/auth/auth.module#AuthModule'
    },
    {
        path: 'editor',
        loadChildren: 'app/editor/editor.module#EditorModule'
    },
    {
        path: 'profile',
        loadChildren: 'app/profile/profile.module#ProfileModule'
    },
    {
        path: 'settings',
        loadChildren: 'app/settings/settings.module#SettingsModule'
    },
    {
        path: 'books',
        loadChildren: 'app/Books/book.module#BookModule'
    }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);