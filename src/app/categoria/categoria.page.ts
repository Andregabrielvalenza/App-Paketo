import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  constructor(private menu: MenuController,private navController: NavController) { }

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
  
  view_galeria () {
    this.navController.navigateForward (['galeria-producto']);
  }

}
