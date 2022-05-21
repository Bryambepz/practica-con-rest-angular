import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { autos } from './domain/autos';
import { ListarVehiculosComponent } from './pages/listar-vehiculos/listar-vehiculos.component';
import { AutoswsService } from './services/autosws.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practica_dockerRest';
  auto: autos = new autos();

  constructor(private route:Router, private autosw: AutoswsService){}

  cambiarPaginaC(){
    this.route.navigate(['crear-vehiculo'])
  }

  cambiarPaginaL(){
    this.route.navigate(['listar-vehiculo'])
  }

  guardar(){
    // alert('Se han guardado los datos');
    if(this.auto.color == '' || this.auto.marca == '' || this.auto.placa == '' ){
      alert('ingrese datos')
    }else{
      this.autosw.guardar(this.auto).subscribe((data:any) => {
        console.log(data);
      })
      console.log('Estos son los datos => \n   ',this.auto);      
      this.cambiarPaginaL();
    }
  }

}