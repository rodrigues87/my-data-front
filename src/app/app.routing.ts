import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {UserTutorialLayoutComponent} from "./user-tutorial-layout/user-tutorial-layout.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'user-tutorial',
        pathMatch: 'full',
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
        }]
    },
    {
        path: 'user-tutorial',
        component: UserTutorialLayoutComponent,
        children: [{
            path: '',
            loadChildren: () => import('./user-tutorial-layout/user-tutorial-layout.module').then(m => m.UserTutorialLayoutModule)
        }]

    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {})
    ],
    exports: [],
})
export class AppRoutingModule {
}
