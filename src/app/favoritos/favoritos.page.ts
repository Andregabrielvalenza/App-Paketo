import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3,
    spaceBetween: 40,
    centeredSlides: true,
  };

}
