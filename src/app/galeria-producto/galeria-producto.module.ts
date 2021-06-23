import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaProductoPageRoutingModule } from './galeria-producto-routing.module';

import { GaleriaProductoPage } from './galeria-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaProductoPageRoutingModule
  ],
  declarations: [GaleriaProductoPage]
})
export class GaleriaProductoPageModule {}
