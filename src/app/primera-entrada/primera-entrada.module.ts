import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeraEntradaPageRoutingModule } from './primera-entrada-routing.module';

import { PrimeraEntradaPage } from './primera-entrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimeraEntradaPageRoutingModule
  ],
  declarations: [PrimeraEntradaPage]
})
export class PrimeraEntradaPageModule {}
