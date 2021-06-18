import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-categoria-interes',
  templateUrl: './categoria-interes.page.html',
  styleUrls: ['./categoria-interes.page.scss'],
})
export class CategoriaInteresPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  view_primera_entrada () {
    this.navController.navigateForward (['primera-entrada']);
  }

}
