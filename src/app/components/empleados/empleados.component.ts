import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadosComponent implements OnInit {
  public empleados: any = [];
  public title = "Listado de empleados activos";
  constructor(
    private _empleadoService: EmpleadoService
  ) { }

  ngOnInit() {
    this._empleadoService.getAll().subscribe(response => {
      if(response && response.json()){
        this.empleados = response.json();
      }
      console.log(this.empleados);
    });
  }

}
