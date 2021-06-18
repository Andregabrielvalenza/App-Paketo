import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarDatosPageRoutingModule } from './confirmar-datos-routing.module';

import { ConfirmarDatosPage } from './confirmar-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarDatosPageRoutingModule
  ],
  declarations: [ConfirmarDatosPage]
})
export class ConfirmarDatosPageModule {}
