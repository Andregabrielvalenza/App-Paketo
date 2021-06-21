import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro-sucursal-slider',
  templateUrl: './registro-sucursal-slider.page.html',
  styleUrls: ['./registro-sucursal-slider.page.scss'],
})
export class RegistroSucursalSliderPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
  };

  view_onboarding_no_usuario () {
    this.navController.navigateForward (['onboarding-no-usuario']);
  }

}
