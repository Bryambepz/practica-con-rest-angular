import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { autos } from '../domain/autos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutoswsService {

  constructor( private http: HttpClient) { }

  guardar(auto: autos){
    // let url = environment.WS

  }

  getAutos(auto: autos){

  }
}
