import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarciasCompraDosPageRoutingModule } from './garcias-compra-dos-routing.module';

import { GarciasCompraDosPage } from './garcias-compra-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarciasCompraDosPageRoutingModule
  ],
  declarations: [GarciasCompraDosPage]
})
export class GarciasCompraDosPageModule {}
