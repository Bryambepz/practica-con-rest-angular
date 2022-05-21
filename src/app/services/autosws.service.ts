import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { autos } from '../domain/autos';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoswsService {

  constructor( private http: HttpClient) {
    console.log("trans")
   }

  guardar(auto: autos){
    let url = environment.WS_PATH+'/agregar?&marca='+auto.marca+'&placa='+auto.placa+'&color='+auto.color+'&puesto='+auto.puesto;

    let header = new HttpHeaders();      
    return this.http.post<any>(url, auto,{
      headers: header
    })

  }

  getAutos(){
    let url = environment.WS_PATH+'/listar';
    return this.http.get<any>(url);
  }
}
