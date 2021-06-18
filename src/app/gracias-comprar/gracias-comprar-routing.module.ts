import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraciasComprarPage } from './gracias-comprar.page';

const routes: Routes = [
  {
    path: '',
    component: GraciasComprarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraciasComprarPageRoutingModule {}
