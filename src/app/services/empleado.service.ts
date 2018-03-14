import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class EmpleadoService {
  public url;
  constructor(
    private _http: Http
  ) { 
    this.url = "http://127.0.0.1:8000/api/";
  }


  getAll() {
    // let params = 'json='+sendjson+'&authorization='+token+'&actualCompany='+companyId;
    let params = '';
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    
    return this._http.post(this.url+'employee', params, { headers:headers });
  }

  detail(empleado){
    let headers = new Headers({'Content-Type':'application/json'});
    
    return this._http.post(this.url+'employee/detail', empleado, { headers:headers });
  }


  create(empleado){
    let headers = new Headers({'Content-Type':'application/json'});
    
    return this._http.post(this.url+'employee/create', empleado, { headers:headers });
  }

  update(empleado){
    // let params = 'params='+JSON.stringify(user);

    console.log(empleado);
    let headers = new Headers({'Content-Type':'application/json'});
    
    return this._http.put(this.url+'employee/modify', empleado, { headers:headers });
  }
}
