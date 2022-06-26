import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

@NgModule({
  declarations: [
    InicioComponent,
    NavbarComponent,
    UsersComponent,
    ReportsComponent,
    DashboardComponent,
    CreateUserComponent,
    EditUserComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
