import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from "../shared/shared.module";
import { FrameComponent } from './frame/frame.component';
import { InicioComponent } from "./inicio/inicio.component";
import { IncidentsComponent } from "./incidentes/incidents.component";
import { ProyectsComponent } from "./proyects/proyects.component";
import { LayoutModule } from '@angular/cdk/layout';



@NgModule({
  declarations: [
    DashboardComponent,
    FrameComponent,
    InicioComponent,
    IncidentsComponent,
    ProyectsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    LayoutModule
  ],
  exports:[
    SharedModule,
  ]
})
export class DashboardModule { }
