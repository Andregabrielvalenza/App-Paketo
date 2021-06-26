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
  {
    path: 'onboarding-no-usuario-uno',
    loadChildren: () => import('./onboarding-no-usuario-uno/onboarding-no-usuario-uno.module').then( m => m.OnboardingNoUsuarioUnoPageModule)
  },
  {
    path: 'gracias-comprar-uno',
    loadChildren: () => import('./gracias-comprar-uno/gracias-comprar-uno.module').then( m => m.GraciasComprarUnoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('./categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'detalle-producto',
    loadChildren: () => import('./detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
  },
  {
    path: 'galeria-producto',
    loadChildren: () => import('./galeria-producto/galeria-producto.module').then( m => m.GaleriaProductoPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'historial-detalle',
    loadChildren: () => import('./historial-detalle/historial-detalle.module').then( m => m.HistorialDetallePageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'sobre-paketo',
    loadChildren: () => import('./sobre-paketo/sobre-paketo.module').then( m => m.SobrePaketoPageModule)
  },
  {
    path: 'sucursales',
    loadChildren: () => import('./sucursales/sucursales.module').then( m => m.SucursalesPageModule)
  },
  {
    path: 'garcias-compra-dos',
    loadChildren: () => import('./garcias-compra-dos/garcias-compra-dos.module').then( m => m.GarciasCompraDosPageModule)
  },
  {
    path: 'datos-bancarios',
    loadChildren: () => import('./datos-bancarios/datos-bancarios.module').then( m => m.DatosBancariosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
