import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-onboarding-no-usuario',
  templateUrl: './onboarding-no-usuario.page.html',
  styleUrls: ['./onboarding-no-usuario.page.scss'],
})
export class OnboardingNoUsuarioPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  view_onboarding_no_usuario_uno () {
    this.navController.navigateForward (['onboarding-no-usuario-uno']);
  }

}
