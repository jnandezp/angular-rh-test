import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import {Location} from '@angular/common';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-detalle-employee',
  templateUrl: './detalle-employee.component.html',
  styleUrls: ['./detalle-employee.component.css'],
  providers: [EmpleadoService]
})

export class DetalleEmployeeComponent implements OnInit {
  public empleado;
  public title = "Detalles del empleado";
  constructor(
    private _route:ActivatedRoute,
    private _location: Location,
    private _empleadoService: EmpleadoService
  ) { 
    this.empleado = {
      'id': '', 
      'nombre': '',
      'telefono': '',
      'direccion': '',
      'fechaNacimiento': '',
      'puesto': '',
      'salario': '',
      'edad': ''
    };
  }

  ngOnInit() {
    this.empleado.id = this._route.snapshot.paramMap.get('id');
    this.getEmployee(this.empleado);
  }

  getEmployee(empleado){
    this._empleadoService.detail(empleado).subscribe( res => {
      if(res && res.json()){
        this.empleado = res.json();
        this.empleado.fechaNacimiento = this.empleado.fecha_nacimiento;
        delete this.empleado.fecha_nacimiento;
        if(this.empleado.economic_data){
          this.empleado.puesto = this.empleado.economic_data.puesto;
          this.empleado.salario = this.empleado.economic_data.salario;
        }else{
          this.empleado.puesto = '';
          this.empleado.salario = '';
        }
      }
    });
  }

  onCancel(){
    console.log('BACK');
    this._location.back();
  }
}