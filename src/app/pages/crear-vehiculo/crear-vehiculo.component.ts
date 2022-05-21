import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { autos } from 'src/app/domain/autos';
import { AutoswsService } from 'src/app/services/autosws.service';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.scss']
})
export class CrearVehiculoComponent implements OnInit {

  auto: autos = new autos();

  constructor(private route: Router,private autoService: AutoswsService ) { }

  ngOnInit(): void {  
      
  }

  cambiarPagina(){
    this.route.navigate(['listar-vehiculo'])
  }

  guardar(){
    // alert('Se han guardado los datos');
    if(this.auto.color == '' || this.auto.marca == '' || this.auto.placa == '' ){
      alert('ingrese datos')
    }else{
      this.autoService.guardar(this.auto).subscribe((data:any) => {
        console.log(data);
      })
      console.log('Estos son los datos => \n   ',this.auto);
      this.cambiarPagina();
    }
  }

}
