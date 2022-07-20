import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forgot',
    component:ForgotComponent
  },
  {
    path:"**",
    redirectTo:"login",
    pathMatch:"full"
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
