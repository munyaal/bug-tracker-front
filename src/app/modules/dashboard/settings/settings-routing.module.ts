import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  { path: '', component: SettingsComponent }, 
  { path: 'status', loadChildren: () => import('./status/status.module').then(m => m.StatusModule) }, 
  { path: 'acces', loadChildren: () => import('./acces/acces.module').then(m => m.AccesModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
