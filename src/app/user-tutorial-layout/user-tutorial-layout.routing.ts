import { Routes } from '@angular/router';
import {FullNameComponent} from "./full-name/full-name.component";
import {BirthDateComponent} from "./birth-date/birth-date.component";
import {AddressComponent} from "./address/address.component";

export const UserTutorialLayoutRouting: Routes = [

    {
        path: '',
        redirectTo: 'full-name',
        pathMatch: 'full',
    },
    {
        path: 'full-name',
        component: FullNameComponent
    },
    {
        path: 'birth-date',
        component: BirthDateComponent
    },
    {
        path: 'address',
        component: AddressComponent
    },
];
