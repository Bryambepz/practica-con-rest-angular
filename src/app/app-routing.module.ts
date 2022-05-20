import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearVehiculoComponent } from './pages/crear-vehiculo/crear-vehiculo.component';
import { ListarVehiculosComponent } from './pages/listar-vehiculos/listar-vehiculos.component';

const routes: Routes = [
  { path: 'crear-vehiculo', component: CrearVehiculoComponent },
  { path: 'listar-vehiculo', component: ListarVehiculosComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
