import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
const routes: Routes = [
  { 
    path: 'auth', component:AuthComponent,
    loadChildren: () =>import('./modules/auth/auth.module').then(  (m) => m.AuthModule),
  },
  {
    path: 'dashboard', component:DashboardComponent,
    loadChildren: () =>import('./modules/dashboard/dashboard.module').then(  (m) => m.DashboardModule),
  },
  {
    path:"",
    redirectTo:"auth",
    pathMatch:"full"
  },
  {
    path:"**",
    redirectTo:"auth",
    pathMatch:"full"
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
