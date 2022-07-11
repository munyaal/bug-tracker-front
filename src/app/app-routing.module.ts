import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { 
    path: 'auth/login', 
    loadChildren: () => import('./modules/auth/login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'auth/forgot',
    loadChildren: () => import('./modules/auth/forgot/forgot.module').then(m => m.ForgotModule) 
  },
  {
    path: 'dashboard',
    loadChildren: () =>import('./modules/dashboard/dashboard.module').then(  (m) => m.DashboardModule),
  },
  {
    path:"",
    redirectTo:"auth/login",
    pathMatch:"full"
  },
  {
    path:"**",
    redirectTo:"auth/login",
    pathMatch:"full"
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
