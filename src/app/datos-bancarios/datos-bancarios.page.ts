import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-datos-bancarios',
  templateUrl: './datos-bancarios.page.html',
  styleUrls: ['./datos-bancarios.page.scss'],
})
export class DatosBancariosPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  view_checkout () {
    this.navController.back ();
  }

}
