import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cambio-contrasena',
  templateUrl: './cambio-contrasena.page.html',
  styleUrls: ['./cambio-contrasena.page.scss'],
})
export class CambioContrasenaPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  view_gracias_comprar () {
    this.navController.navigateForward (['gracias-comprar']);
  }

}
