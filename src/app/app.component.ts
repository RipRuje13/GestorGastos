import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { TxManagementComponent } from './tx-management/tx-management.component';
import { ReportsComponent } from './reports/reports.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, LoginComponent, RegisterComponent, ForgotPwdComponent, TxManagementComponent, ReportsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gestor Gastos';
  
}
