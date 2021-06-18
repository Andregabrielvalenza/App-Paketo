import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaInteresPageRoutingModule } from './categoria-interes-routing.module';

import { CategoriaInteresPage } from './categoria-interes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaInteresPageRoutingModule
  ],
  declarations: [CategoriaInteresPage]
})
export class CategoriaInteresPageModule {}
