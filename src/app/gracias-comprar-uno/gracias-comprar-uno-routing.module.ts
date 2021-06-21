import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraciasComprarUnoPage } from './gracias-comprar-uno.page';

const routes: Routes = [
  {
    path: '',
    component: GraciasComprarUnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraciasComprarUnoPageRoutingModule {}
