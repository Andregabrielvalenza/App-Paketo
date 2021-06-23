import { Component, OnInit } from '@angular/core';
import { NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-galeria-producto',
  templateUrl: './galeria-producto.page.html',
  styleUrls: ['./galeria-producto.page.scss'],
})
export class GaleriaProductoPage implements OnInit {

  constructor(
    private navController: NavController, 
    public toastController: ToastController
    ) { }

  ngOnInit() {
  }


  view_detalle_producto () {
    this.navController.navigateForward (['detalle-producto']);
  }

  async presentToast() {
    this.toastController.create({
      header: 'Agregado correctamente',
      message: 'Para editar la cantidad, anda a “mi carrito”',
      position: 'top',
      cssClass: 'toast-custom-class',
    }).then((toast) => {
      toast.present();
    });
  }

}
