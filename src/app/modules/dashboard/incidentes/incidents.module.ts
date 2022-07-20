import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidentsRoutingModule } from './incidents-routing.module';
import { IncidentsComponent } from './incidents.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    IncidentsRoutingModule
  ]
})
export class IncidentsModule { }
