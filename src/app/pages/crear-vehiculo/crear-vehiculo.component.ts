import { Component, OnInit } from '@angular/core';
import { autos } from 'src/app/domain/autos';
import { AutoswsService } from 'src/app/services/autosws.service';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.scss']
})
export class CrearVehiculoComponent implements OnInit {

  auto: autos = new autos();

  constructor(private autoService: AutoswsService) { }

  ngOnInit(): void {
    this.generarId;    
  }

  generarId(){
    this.auto.id += 1;  
  }

  guardar(){
    // alert('Se han guardado los datos');
    if(this.auto.color == null || this.auto.marca == null || this.auto == null){
      console.log('ingrese datos')
    }else{
      this.generarId;
      console.log('Estos son los datos => \n',this.auto);
    }
  }

}
