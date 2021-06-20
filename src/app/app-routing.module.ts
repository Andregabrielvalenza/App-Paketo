import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cambio-contrasena',
    loadChildren: () => import('./cambio-contrasena/cambio-contrasena.module').then( m => m.CambioContrasenaPageModule)
  },
  {
    path: 'gracias-comprar',
    loadChildren: () => import('./gracias-comprar/gracias-comprar.module').then( m => m.GraciasComprarPageModule)
  },
  {
    path: 'categoria-interes',
    loadChildren: () => import('./categoria-interes/categoria-interes.module').then( m => m.CategoriaInteresPageModule)
  },
  {
    path: 'primera-entrada',
    loadChildren: () => import('./primera-entrada/primera-entrada.module').then( m => m.PrimeraEntradaPageModule)
  },
  {
    path: 'confirmar-datos',
    loadChildren: () => import('./confirmar-datos/confirmar-datos.module').then( m => m.ConfirmarDatosPageModule)
  },
  {
    path: 'onboarding-no-usuario',
    loadChildren: () => import('./onboarding-no-usuario/onboarding-no-usuario.module').then( m => m.OnboardingNoUsuarioPageModule)
  },
  {
    path: 'registro-sucursal-slider',
    loadChildren: () => import('./registro-sucursal-slider/registro-sucursal-slider.module').then( m => m.RegistroSucursalSliderPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
