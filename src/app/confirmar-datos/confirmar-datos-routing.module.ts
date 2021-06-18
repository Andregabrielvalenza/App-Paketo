import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarDatosPage } from './confirmar-datos.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarDatosPageRoutingModule {}
