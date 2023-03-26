import { Routes } from '@angular/router';
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {FormsComponent} from "./forms/forms.component";

export const UserFormsLayoutRouting: Routes = [


    {
        path: '',
        component: FormsComponent
    },
    {
        path: 'profile',
        component: UserProfileComponent
    }
];
