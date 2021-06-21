import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-onboarding-no-usuario-uno',
  templateUrl: './onboarding-no-usuario-uno.page.html',
  styleUrls: ['./onboarding-no-usuario-uno.page.scss'],
})
export class OnboardingNoUsuarioUnoPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }


  view_gracias_comprar_uno () {
    this.navController.navigateForward (['gracias-comprar-uno']);
  }

}
