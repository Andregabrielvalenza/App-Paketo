import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirmar-datos',
  templateUrl: './confirmar-datos.page.html',
  styleUrls: ['./confirmar-datos.page.scss'],
})
export class ConfirmarDatosPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  view_registro_surcusal () {
    this.navController.navigateForward (['registro-sucursal-slider']);
  }

}
