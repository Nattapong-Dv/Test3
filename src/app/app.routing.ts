import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard', //home
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'tables',
        loadChildren: './views/tables/tables.module#TablesModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'manages',
        canActivate: [AuthGuard],
        loadChildren: './views/manages/manages.module#ManagesModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'googlemap',
        loadChildren: './views/googlemap/googlemap.module#GooglemapModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
