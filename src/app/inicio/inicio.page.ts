import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private menu: MenuController, private navController: NavController) { }

  ngOnInit() {
  }

  openEnd() {
    this.menu.open();
  }

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3,
    spaceBetween: 10,
    
  };

  view_categoria () {
    this.navController.navigateForward (['categoria']);
  }

  view_sucursal () {
    this.navController.navigateForward (['sucursales']);
  }
}
