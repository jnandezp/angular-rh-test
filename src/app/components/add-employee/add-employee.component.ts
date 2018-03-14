import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { DatePipe } from '@angular/common';
import { EmpleadoService } from '../../services/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers: [EmpleadoService]
})
export class AddEmployeeComponent implements OnInit {

  public title = 'Agregar nuevo empleado';
  public empleado;
  public hideSubmit = false;
  

  constructor(
    private _location: Location,
    private _router: Router,
    private _empleadoService: EmpleadoService
  ) { 
    this.empleado = {
      'nombre': '',
      'telefono': '',
      'direccion': '',
      'fechaNacimiento': '',
      'puesto': 'desarrollador',
      'salario': '',
      'edad': ''
    };
  }

  ngOnInit() {
  }

  onSubmit(){
    this.hideSubmit = true;
    this._empleadoService.create(this.empleado).subscribe( res => {
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
