import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GarciasCompraDosPage } from './garcias-compra-dos.page';

const routes: Routes = [
  {
    path: '',
    component: GarciasCompraDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GarciasCompraDosPageRoutingModule {}
