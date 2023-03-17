import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RegistryStarterComponent } from './registry-starter/registry-starter.component';
import {NgxTypedJsModule} from "ngx-typed-js";
import {MatInputModule} from "@angular/material/input";

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
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    RegistryStarterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
