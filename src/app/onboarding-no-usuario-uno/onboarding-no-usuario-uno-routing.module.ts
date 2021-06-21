import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardingNoUsuarioUnoPage } from './onboarding-no-usuario-uno.page';

const routes: Routes = [
  {
    path: '',
    component: OnboardingNoUsuarioUnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingNoUsuarioUnoPageRoutingModule {}
