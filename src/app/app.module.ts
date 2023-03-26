import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {NgxTypedJsModule} from "ngx-typed-js";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { UserTutorialLayoutComponent } from './user-tutorial-layout/user-tutorial-layout.component';
import {AdminLayoutModule} from "./layouts/admin-layout/admin-layout.module";
import {UserTutorialLayoutModule} from "./user-tutorial-layout/user-tutorial-layout.module";
import { UserFormsLayoutComponent } from './user-forms-layout/user-forms-layout.component';
import {UserFormsLayoutModule} from "./user-forms-layout/user-forms-layout.module";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        NgxTypedJsModule,
        MatInputModule,
        MatButtonModule,
        AdminLayoutModule,
        UserTutorialLayoutModule,
        UserFormsLayoutModule,
    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UserTutorialLayoutComponent,
    UserFormsLayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
