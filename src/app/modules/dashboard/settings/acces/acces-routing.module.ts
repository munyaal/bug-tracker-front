import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesComponent } from './acces.component';

const routes: Routes = [
  { path: '', component: AccesComponent }, 
  { path: 'actions', loadChildren: () => import('./actions/actions.module').then(m => m.ActionsModule) }, 
  { path: 'routes', loadChildren: () => import('./routes/routes.module').then(m => m.RoutesModule) }, 
  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) }, 
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesRoutingModule { }