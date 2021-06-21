import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraciasComprarUnoPageRoutingModule } from './gracias-comprar-uno-routing.module';

import { GraciasComprarUnoPage } from './gracias-comprar-uno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraciasComprarUnoPageRoutingModule
  ],
  declarations: [GraciasComprarUnoPage]
})
export class GraciasComprarUnoPageModule {}
