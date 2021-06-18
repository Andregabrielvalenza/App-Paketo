import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-primera-entrada',
  templateUrl: './primera-entrada.page.html',
  styleUrls: ['./primera-entrada.page.scss'],
})
export class PrimeraEntradaPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  view_confirmar_datos () {
    this.navController.navigateForward (['confirmar-datos']);
  }

}
