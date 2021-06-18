import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimeraEntradaPage } from './primera-entrada.page';

const routes: Routes = [
  {
    path: '',
    component: PrimeraEntradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeraEntradaPageRoutingModule {}
