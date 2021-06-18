import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navController: NavController) {}

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
  };

  view_login () {
    this.navController.navigateForward (['login']);
  }

}
