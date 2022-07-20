import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesRoutingModule } from './acces-routing.module';
import { AccesComponent } from './acces.component';
import { ActionsComponent } from "./actions/actions.component";
import { RolesComponent } from "./roles/roles.component";
import { RoutesComponent } from "./routes/routes.component";
import { UsersComponent } from "./users/users.component";
import { SharedModule } from "../../../shared/shared.module";


@NgModule({
  declarations: [
    AccesComponent,
    ActionsComponent,
    RolesComponent,
    RoutesComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AccesRoutingModule,
    SharedModule
  ]
})
export class AccesModule { }
