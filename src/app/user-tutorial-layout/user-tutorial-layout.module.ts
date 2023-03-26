import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserTutorialLayoutRouting} from './user-tutorial-layout.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {NgxTypedJsModule} from "ngx-typed-js";
import {FullNameComponent} from "./full-name/full-name.component";
import {UserTutorialNavComponent} from "./user-tutorial-nav/user-tutorial-nav.component";
import { BirthDateComponent } from './birth-date/birth-date.component';
import { AddressComponent } from './address/address.component';
import { ContactComponent } from './contact/contact.component';
import {TextMaskModule} from "angular2-text-mask";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserTutorialLayoutRouting),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatAutocompleteModule,
        NgxTypedJsModule,
        MatInputModule,
        MatButtonModule,
        TextMaskModule,
    ],
    exports: [
        UserTutorialNavComponent
    ],
    declarations: [
        FullNameComponent,
        UserTutorialNavComponent,
        BirthDateComponent,
        AddressComponent,
        ContactComponent
    ]
})

export class UserTutorialLayoutModule {
}
