import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gracias-comprar',
  templateUrl: './gracias-comprar.page.html',
  styleUrls: ['./gracias-comprar.page.scss'],
})
export class GraciasComprarPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  view_categoria_interes () {
    this.navController.navigateForward (['categoria-interes']);
  }

}
