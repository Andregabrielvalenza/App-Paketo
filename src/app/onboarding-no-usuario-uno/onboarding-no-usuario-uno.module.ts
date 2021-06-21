import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardingNoUsuarioUnoPageRoutingModule } from './onboarding-no-usuario-uno-routing.module';

import { OnboardingNoUsuarioUnoPage } from './onboarding-no-usuario-uno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardingNoUsuarioUnoPageRoutingModule
  ],
  declarations: [OnboardingNoUsuarioUnoPage]
})
export class OnboardingNoUsuarioUnoPageModule {}
