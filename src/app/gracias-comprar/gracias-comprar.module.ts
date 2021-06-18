import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraciasComprarPageRoutingModule } from './gracias-comprar-routing.module';

import { GraciasComprarPage } from './gracias-comprar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraciasComprarPageRoutingModule
  ],
  declarations: [GraciasComprarPage]
})
export class GraciasComprarPageModule {}
