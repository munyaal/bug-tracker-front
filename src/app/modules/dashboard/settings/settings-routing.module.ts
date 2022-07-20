import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [ 
  { 
    path: 'status', component:StatusComponent
    // loadChildren: () => import('./status/status.module').then(m => m.StatusModule)
  },
  {
    path: 'acces',
    loadChildren: () => import('./acces/acces.module').then(m => m.AccesModule)
  },
  {
    path:"**",
    pathMatch:"full",
    redirectTo:"status"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
