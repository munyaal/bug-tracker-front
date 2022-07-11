import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesRoutingModule } from './acces-routing.module';
import { AccesComponent } from './acces.component';


@NgModule({
  declarations: [
    AccesComponent
  ],
  imports: [
    CommonModule,
    AccesRoutingModule
  ]
})
export class AccesModule { }
