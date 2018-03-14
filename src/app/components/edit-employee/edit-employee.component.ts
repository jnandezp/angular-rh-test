import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';
import {Location} from '@angular/common';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: '../add-employee/add-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
  providers: [EmpleadoService]
})
export class EditEmployeeComponent implements OnInit {
  public empleado;
  public title = 'Editar informacion del empleado';
  public hideSubmit = false;
  
  constructor(
    private _route:ActivatedRoute,
    private _location: Location,
    private _router: Router,
    private _empleadoService: EmpleadoService
  ) { 
    this.empleado = {
      'id': null,
      'nombre': '',
      'telefono': '',
      'direccion': '',
      'fechaNacimiento': '',
      'puesto': '',
      'salario': '',
      'edad': ''
    };

    // OBETENER informacion del empleado
  }

  ngOnInit() {
    this.empleado.id = this._route.snapshot.paramMap.get('id');
    console.log(this.empleado.id);
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

  onSubmit(){
    this.hideSubmit = true;
    console.log(this.empleado);
    this._empleadoService.update(this.empleado).subscribe( res => {
      console.log(res);
      this.hideSubmit = false;
      this._router.navigateByUrl('/');
    },
    error => {
      this.hideSubmit = false;
    });
  }

  onCancel(){
    console.log('BACK');
    this._location.back();
  }

}
