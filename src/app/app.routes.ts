import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TxManagementComponent } from './tx-management/tx-management.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tx-management', component: TxManagementComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home on empty path
  { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page
];
