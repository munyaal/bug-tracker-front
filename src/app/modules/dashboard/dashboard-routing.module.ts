import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { 
    path: '', component: DashboardComponent,
    children:[
      { 
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) 
      },  
      { 
        path: 'incidentes',
        loadChildren: () => import('./incidentes/incidents.module').then(m => m.IncidentesModule) 
      },
      { 
        path: 'proyectos',
        loadChildren: () => import('./proyects/proyects.module').then(m => m.ProyectsModule) 
      },
      { 
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) 
      },
    ]
  },
  {
    path:"**",
    redirectTo:"",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
