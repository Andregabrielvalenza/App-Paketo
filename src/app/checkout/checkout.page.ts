import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  private selectedSegment: String ="deposito"
  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    this.selectedSegment = ev.target.value
  }

  view_gracias_comprar () {
    this.navController.navigateForward (['garcias-compra-dos']);
  }

  view_datos_bancarios () {
    this.navController.navigateForward (['datos-bancarios']);
  }

}
