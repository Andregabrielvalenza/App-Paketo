import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroSucursalSliderPage } from './registro-sucursal-slider.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroSucursalSliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroSucursalSliderPageRoutingModule {}
