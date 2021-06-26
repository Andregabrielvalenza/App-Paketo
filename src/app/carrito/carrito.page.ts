import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  view_checkout() {
    this.navController.navigateForward (['checkout']);
  }

}
