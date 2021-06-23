import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriaProductoPage } from './galeria-producto.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriaProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleriaProductoPageRoutingModule {}
