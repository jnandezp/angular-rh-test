import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';

import { EmpleadosComponent } from './components/empleados/empleados.component';
import { AppComponent } from './components/component/app.component';
import { LoginComponent } from './components/login/login.component';

// Employee
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { DetalleEmployeeComponent } from './components/detalle-employee/detalle-employee.component';

import { NotFoundComponent } from './components/404-not-found/404-not-found.component';

const appRoutes: Routes = [
    { path: '', component: EmpleadosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'nuevo-empleado', component: AddEmployeeComponent },
    { path: 'editar-empleado/:id', component: EditEmployeeComponent },
    { path: 'detalle-empleado/:id', component: DetalleEmployeeComponent },
    { path: '**', component: NotFoundComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);