import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroSucursalSliderPageRoutingModule } from './registro-sucursal-slider-routing.module';

import { RegistroSucursalSliderPage } from './registro-sucursal-slider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroSucursalSliderPageRoutingModule
  ],
  declarations: [RegistroSucursalSliderPage]
})
export class RegistroSucursalSliderPageModule {}
