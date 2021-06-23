import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-galeria-producto',
  templateUrl: './galeria-producto.page.html',
  styleUrls: ['./galeria-producto.page.scss'],
})
export class GaleriaProductoPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }


  view_detalle_producto () {
    this.navController.navigateForward (['detalle-producto']);
  }

}
