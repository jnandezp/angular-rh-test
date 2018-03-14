import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/component/app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { NotFoundComponent } from './components/404-not-found/404-not-found.component';

import { routing, appRoutingProviders } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { DetalleEmployeeComponent } from './components/detalle-employee/detalle-employee.component'


@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    NotFoundComponent,
    LoginComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    DetalleEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
