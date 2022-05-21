import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { autos } from 'src/app/domain/autos';
import { AutoswsService } from 'src/app/services/autosws.service';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.scss']
})
export class ListarVehiculosComponent implements OnInit {
  auto: autos = new autos();
  listAutos:any;
  constructor(private autoServ: AutoswsService) { }

  llenarT(){
    this.listAutos = this.autoServ.getAutos();
  }

  ngOnInit(): void {
    this.llenarT();
  }


}
