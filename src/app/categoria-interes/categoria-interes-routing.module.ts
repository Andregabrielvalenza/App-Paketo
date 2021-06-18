import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaInteresPage } from './categoria-interes.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaInteresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaInteresPageRoutingModule {}
