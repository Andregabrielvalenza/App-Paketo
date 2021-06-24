import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  view_historial_detalle () {
    this.navController.navigateForward (['historial-detalle']);
  }

}
