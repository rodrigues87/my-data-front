import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserFormsLayoutRouting} from './user-forms-layout.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {NgxTypedJsModule} from "ngx-typed-js";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {UserFormsNavComponent} from "./user-forms-nav/user-forms-nav.component";
import {MatIconModule} from "@angular/material/icon";
import {FormsComponent} from './forms/forms.component';
import {MatCardModule} from "@angular/material/card";
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserFormsLayoutRouting),
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
        MatIconModule,
        MatCardModule,
        MatDialogModule,

    ],
    exports: [
        UserFormsNavComponent,
    ],
    declarations: [
        UserProfileComponent,
        UserFormsNavComponent,
        FormsComponent,
        DeleteDialogComponent,
    ]
})

export class UserFormsLayoutModule {
}
