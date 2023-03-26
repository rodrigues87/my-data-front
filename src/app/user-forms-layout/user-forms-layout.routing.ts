import { Routes } from '@angular/router';
import {UserProfileComponent} from "./user-profile/user-profile.component";

export const UserFormsLayoutRouting: Routes = [

    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
    },
    {
        path: 'profile',
        component: UserProfileComponent
    }
];
