import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgotComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
