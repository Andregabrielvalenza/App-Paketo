import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-sucursal-slider',
  templateUrl: './registro-sucursal-slider.page.html',
  styleUrls: ['./registro-sucursal-slider.page.scss'],
})
export class RegistroSucursalSliderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
  };

}
