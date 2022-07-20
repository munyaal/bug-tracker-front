import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { StatusComponent } from "./status/status.component";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    SettingsComponent,
    StatusComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
