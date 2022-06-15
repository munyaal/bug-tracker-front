import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    { 
        path: '',
        loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule) 
    },
    { 
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) 
    },
    { 
        path: 'auth/login', 
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) 
    },
    {
        path: 'auth/forgot',
        loadChildren: () => import('./modules/forgot/forgot.module').then(m => m.ForgotModule)
    },
    { 
        path: 'dashboard', 
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    { 
        path: 'dashboard', 
        loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
    },
    { 
        path: 'dashboard/incident',
        loadChildren: () => import('./modules/incident/incident.module').then(m => m.IncidentModule)
    },
    { 
        path: 'dashboard/projects',
        loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule) 
    },
    {     
        path: 'dashboard/settings',
        loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule) 
    },
    { 
        path: 'dashboard/settings/status',
        loadChildren: () => import('./modules/status/status.module').then(m => m.StatusModule)
    },
    { 
        path: 'dashboard/settings/access',
        loadChildren: () => import('./modules/acces/acces.module').then(m => m.AccesModule)
    },
    { 
        path: 'dashboard/setting/type',
        loadChildren: () => import('./modules/type/type.module').then(m => m.TypeModule) 
    },
    { 
        path: 'dashboard/setting/access/action', 
        loadChildren: () => import('./modules/action/action.module').then(m => m.ActionModule) 
    },
    {     
        path: 'dashboard/setting/access/routes', 
        loadChildren: () => import('./modules/routes/routes.module').then(m => m.RoutesModule) 
    },
    { 
        path: 'dashboard/setting/access/roles', 
        loadChildren: () => import('./modules/roles/roles.module').then(m => m.RolesModule)
    },
    { 
        path: 'dashboard/setting/access/users', 
        loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
