import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { IncidentsComponent } from './incidentes/incidents.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { 
    path: 'inicio', component:InicioComponent
    // loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) 
  },  
  { 
    path: 'incidentes', component:IncidentsComponent
    // loadChildren: () => import('./incidentes/incidents.module').then(m => m.IncidentesModule) 
  },
  { 
    path: 'proyectos', component:ProyectsComponent
    // loadChildren: () => import('./proyects/proyects.module').then(m => m.ProyectsModule) 
  },
  { 
    path: 'settings', component:SettingsComponent,
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) 
  },
  {
    path:"**",
    pathMatch:"full",
    redirectTo:"inicio"
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
