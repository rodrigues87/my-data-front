import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {UserTutorialLayoutComponent} from "./user-tutorial-layout/user-tutorial-layout.component";
import {UserFormsLayoutComponent} from "./user-forms-layout/user-forms-layout.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'tutorial',
        pathMatch: 'full',
    },
    {
        path: 'forms',
        component: UserFormsLayoutComponent,
        children: [{
            path: '',
            loadChildren: () => import('./user-forms-layout/user-forms-layout.module').then(m => m.UserFormsLayoutModule)
        }]
    },
    {
        path: 'tutorial',
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
